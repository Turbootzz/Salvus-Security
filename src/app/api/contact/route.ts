import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactFormData = {
  name: string;
  company?: string;
  email: string;
  subject: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const formData: ContactFormData = await req.json();

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${formData.name}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Recieves the email
      replyTo: formData.email,
      subject: formData.subject,
      text: `Naam: ${formData.name}\nBedrijf: ${formData.company || "-"}\nE-mail: ${formData.email}\n\nBericht:\n${formData.message}`,
      html: `
        <p><strong>Naam:</strong> ${formData.name}</p>
        <p><strong>Bedrijf:</strong> ${formData.company || "-"}</p>
        <p><strong>E-mail:</strong> ${formData.email}</p>
        <p><strong>Bericht:</strong></p>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Verstuur e-mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "E-mail succesvol verzonden!" }, { status: 200 });
  } catch (error) {
    console.error("Fout bij verzenden e-mail:", error);
    return NextResponse.json({ success: false, message: "Er is een fout opgetreden." }, { status: 500 });
  }
}
