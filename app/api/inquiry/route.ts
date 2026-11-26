import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { Name, Email, Experience, Guests, Date, Details } = data;

    if (
      typeof Name !== "string" ||
      !Name.trim() ||
      typeof Email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)
    ) {
      return NextResponse.json(
        { error: "A valid name and email are required." },
        { status: 400 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "Xena's Flavor Lab <onboarding@resend.dev>",
      to: process.env.INQUIRY_EMAIL!,
      replyTo: Email,
      subject: "New chef service inquiry",
      text: `
New Inquiry — Xena's Flavor Lab

Name: ${Name}
Email: ${Email}
Experience: ${Experience || "Not specified"}
Guest count: ${Guests || "Not specified"}
Preferred date: ${Date || "Not specified"}

Event details:
${Details || "Not specified"}
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        { error: "Unable to send inquiry." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
