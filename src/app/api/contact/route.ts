import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schema";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Check honeypot first
    if (body.website_honeypot && body.website_honeypot.trim() !== "") {
      // Silently discard bot submission
      return NextResponse.json({ success: true, message: "Message received" });
    }

    // Validate with Zod
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      const formattedErrors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        { success: false, errors: formattedErrors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    // Resend integration
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const recipientEmail = process.env.CONTACT_EMAIL || "hitheshhg@gmail.com"; // TODO: Configure recipient email

      await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: recipientEmail,
        replyTo: email,
        subject: subject || `New portfolio contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #111;">
            <h2>New Message from Portfolio Website</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        `,
      });
    } else {
      // In development or when RESEND_API_KEY is not configured yet
      console.log("[Contact Form Received - Simulated]", {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
