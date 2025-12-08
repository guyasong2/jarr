// app/api/newsletter/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const NEXT_PUBLIC_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!NEXT_PUBLIC_SUPABASE_URL || !NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error("NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY is not set");
}

// This client uses the anon key (fine for server + RLS disabled on this table)
const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, {
  auth: { persistSession: false },
});

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Check if already subscribed
    const { data: existing, error: selectError } = await supabase
      .from("newsletter_subscribers")
      .select("id")
      .eq("email", email)
      .limit(1)
      .maybeSingle();

    if (selectError) {
      console.error("Supabase select error:", selectError);
      throw selectError;
    }

    if (existing) {
      // Email already in DB
      return NextResponse.json(
        { success: true, already: true },
        { status: 200 }
      );
    }

    // Insert new subscriber
    const { error: insertError } = await supabase
      .from("newsletter_subscribers")
      .insert({ email });

    if (insertError) {
      console.error("Supabase insert error:", insertError);
      throw insertError;
    }

    return NextResponse.json(
      { success: true, already: false },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Newsletter route error:", err);
    return NextResponse.json(
      {
        error: "Internal server error",
        message: err?.message ?? String(err), // keep this for debugging
      },
      { status: 500 }
    );
  }
}