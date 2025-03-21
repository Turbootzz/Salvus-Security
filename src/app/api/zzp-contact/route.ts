import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type LoondienstContactFormData = {
  name: string;
  email: string;
  picklist: string;
  subject: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const formData: LoondienstContactFormData = await req.json();

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: true, // true for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptionsLoondienst = {
      from: `"${formData.name}" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_RECEIVER, // Recieves the email
      replyTo: formData.email,
      subject: formData.subject,
      text: `Solicitatie ZZP Contact Formulier\nNaam: ${formData.name}\nBeveiligingsvoorkeur: ${formData.picklist}\nE-mail: ${formData.email}\n\nBericht:\n${formData.message}`,
      html: `
        <h1><strong>Solicitatie ZZP Contact Formulier</strong></h1>
        <p><strong>Naam:</strong> ${formData.name}</p>
        <p><strong>Beveiligingsvoorkeur:</strong> ${formData.picklist}</p>
        <p><strong>E-mail:</strong> ${formData.email}</p>
        <p><strong>Bericht:</strong></p>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Verstuur e-mail
    await transporter.sendMail(mailOptionsLoondienst);

    return NextResponse.json({ success: true, message: "E-mail succesvol verzonden!" }, { status: 200 });
  } catch (error) {
    console.error("Fout bij verzenden e-mail:", error);
    return NextResponse.json({ success: false, message: "Er is een fout opgetreden." }, { status: 500 });
  }
}
