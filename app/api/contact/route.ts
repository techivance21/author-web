import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function getEmailConfig(): { user: string; pass: string; to: string } {
  const user = process.env.CONTACT_EMAIL_USER;
  const pass = process.env.CONTACT_EMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_EMAIL_TO;

  const missing = [
    !user && "CONTACT_EMAIL_USER",
    !pass && "CONTACT_EMAIL_APP_PASSWORD",
    !to && "CONTACT_EMAIL_TO",
  ].filter(Boolean) as string[];

  if (missing.length) {
    throw new Error(
      `Missing environment variables: ${missing.join(
        ", "
      )}. Check your .env configuration.`
    );
  }

  return { user: user!, pass: pass!, to: to! };
}

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const env = getEmailConfig();

    const body = (await request.json()) as ContactPayload;
    const { firstName, lastName, email, phone, subject, message } = body ?? {};

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "firstName, lastName, email, and message are required.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: env.user,
        pass: env.pass,
      },
    });

    const fullName = `${firstName} ${lastName}`.trim();
    const safeSubject =
      subject && subject.trim().length > 0
        ? subject.trim()
        : "New contact form submission";

    await transporter.sendMail({
      from: `${fullName} <${email}>`,
      to: env.to,
      replyTo: `${fullName} <${email}>`,
      subject: safeSubject,
      text: `
Name: ${fullName}
Email: ${email}
Phone: ${phone ?? "Not provided"}

Message:
${message}
      `.trim(),
      html: `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone ?? "Not provided"}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] Failed to send email", error);

    const message =
      error instanceof Error ? error.message : "Unable to send your message.";
    const status = message.toLowerCase().includes("missing environment")
      ? 500
      : 502;

    return NextResponse.json({ success: false, error: message }, { status });
  }
}
