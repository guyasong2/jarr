// server/routers/newsletter.ts
import { z } from "zod";
import { supabaseAdmin } from "../supabaseClient";

const subscribeSchema = z.object({
  email: z.string().email(),
});

export type SubscribeResult = {
  success: boolean;
  already: boolean;
};

export async function subscribeToNewsletter(
  input: unknown
): Promise<SubscribeResult> {
  const { email } = subscribeSchema.parse(input);

  // 1. Check if email already exists
  const { data: existing, error: selectError } = await supabaseAdmin
    .from("newsletter_subscribers")
    .select("id")
    .eq("email", email)
    .limit(1)
    .maybeSingle();

  if (selectError) {
    console.error("Supabase select error (newsletter):", selectError);
    throw selectError;
  }

  if (existing) {
    // Already subscribed
    return { success: true, already: true };
  }

  // 2. Insert new subscriber
  const { error: insertError } = await supabaseAdmin
    .from("newsletter_subscribers")
    .insert({ email });

  if (insertError) {
    console.error("Supabase insert error (newsletter):", insertError);
    throw insertError;
  }

  return { success: true, already: false };
}