// app/api/newsletter/route.ts
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { subscribeToNewsletter } from "@/server/routers/newsletter";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await subscribeToNewsletter(body);

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    console.error("Newsletter subscribe error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}