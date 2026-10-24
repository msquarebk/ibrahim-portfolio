import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message || !String(email).includes("@")) {
    return NextResponse.json(
      { error: "Fill in all fields with a valid email." },
      { status: 400 }
    );
  }

  // For now the message is only logged in the terminal.
  // Next step: send it to your email or save it in the database.
  console.log("New message:", { name, email, message });

  return NextResponse.json({ ok: true });
}
