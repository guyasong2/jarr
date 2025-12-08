// app/api/resources/route.ts
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { createResource, listResources } from "@/server/routers/resource";

const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

export async function GET() {
  try {
    const resources = await listResources();
    return NextResponse.json({ resources });
  } catch (err) {
    console.error("List resources error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    // Simple admin check via Bearer token
    const authHeader = req.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "").trim();

    if (!ADMIN_TOKEN || token !== ADMIN_TOKEN) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const resource = await createResource(body);

    return NextResponse.json({ resource });
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        { error: "Invalid resource data." },
        { status: 400 }
      );
    }

    console.error("Create resource error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}