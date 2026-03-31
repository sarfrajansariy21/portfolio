import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // VALIDATION
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("Contact Form Submission:", { name, email, subject, message });

    // TODO: Integrate with Email Service (e.g., Resend, SendGrid, etc.)
    // For now, we simulate a successful database/email operation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
