import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  const { name } = body;

  if (!name || name.trim().length === 0) {
    return NextResponse.json(
      { error: "Name is required" },
      { status: 400 }
    );
  }

  return NextResponse.json({
    greeting: `Hello, ${name}!`,
    mode: process.env.NODE_ENV || "unknown",
  });
}