// server/routers/newsletter.ts
import { sql } from "@vercel/postgres";
import { z } from "zod";

const subscribeSchema = z.object({
  email: z.string().email(),
});

export type SubscribeInput = z.infer<typeof subscribeSchema>;

export async function subscribeToNewsletter(input: unknown) {
  // 1. Validate input
  const { email } = subscribeSchema.parse(input);

  // 2. Ensure table exists (idempotent)
  await sql`
    CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      id SERIAL PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `;

  // 3. Insert (ignore if email already exists)
  await sql`
    INSERT INTO newsletter_subscribers (email)
    VALUES (${email})
    ON CONFLICT (email) DO NOTHING;
  `;

  return { success: true };
}

// Optional: list subscribers (for an admin dashboard)
export async function listNewsletterSubscribers() {
  const { rows } = await sql`
    SELECT id, email, created_at
    FROM newsletter_subscribers
    ORDER BY created_at DESC;
  `;
  return rows;
}