// server/routers/resource.ts
import { sql } from "@vercel/postgres";
import { z } from "zod";

const resourceSchema = z.object({
  title: z.string().min(1).max(255),
  url: z.string().url(),
  type: z.enum(["paper", "link", "video", "other"]).default("paper"),
  description: z.string().max(1000).optional(),
});

export type ResourceInput = z.infer<typeof resourceSchema>;

async function ensureResourcesTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS resources (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      url TEXT NOT NULL,
      type TEXT NOT NULL,
      description TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `;
}

export async function createResource(input: unknown) {
  const { title, url, type, description } = resourceSchema.parse(input);

  await ensureResourcesTable();

  const { rows } = await sql`
    INSERT INTO resources (title, url, type, description)
    VALUES (${title}, ${url}, ${type}, ${description ?? null})
    RETURNING id, title, url, type, description, created_at;
  `;

  return rows[0];
}

export async function listResources() {
  await ensureResourcesTable();

  const { rows } = await sql`
    SELECT id, title, url, type, description, created_at
    FROM resources
    ORDER BY created_at DESC;
  `;

  return rows;
}