"use server";

import nodemailer from "nodemailer";

export interface FormData {
  name: string;
  email: string;
  company: string;
  inquiry: string;
  message: string;
}

export interface SendResult {
  ok: boolean;
  error?: string;
}

export async function sendEmail(data: FormData): Promise<SendResult> {
  const { name, email, company, inquiry, message } = data;

  if (!name || !email || !message) {
    return { ok: false, error: "Name, email and message are required." };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const inquiryLabels: Record<string, string> = {
    partnership: "Partnership",
    research: "Research Collaboration",
    investment: "Investment",
    sourcing: "Agricultural Sourcing",
    other: "Other",
  };

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; color: #1A1A18;">
      <div style="background: #1A1A18; padding: 24px 32px; margin-bottom: 0;">
        <p style="color: #C9CBBE; font-size: 12px; text-transform: uppercase; letter-spacing: 0.14em; margin: 0;">
          XiliHerb — New Inquiry
        </p>
      </div>
      <div style="border: 1px solid #E8E6DE; border-top: none; padding: 32px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E6DE; font-size: 12px; color: #6B6A62; text-transform: uppercase; letter-spacing: 0.1em; width: 140px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E6DE; font-size: 14px; color: #1A1A18;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E6DE; font-size: 12px; color: #6B6A62; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E6DE; font-size: 14px; color: #1A1A18;">${email}</td>
          </tr>
          ${company ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E6DE; font-size: 12px; color: #6B6A62; text-transform: uppercase; letter-spacing: 0.1em;">Organisation</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E6DE; font-size: 14px; color: #1A1A18;">${company}</td>
          </tr>` : ""}
          ${inquiry ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E6DE; font-size: 12px; color: #6B6A62; text-transform: uppercase; letter-spacing: 0.1em;">Nature</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E6DE; font-size: 14px; color: #1A1A18;">${inquiryLabels[inquiry] ?? inquiry}</td>
          </tr>` : ""}
        </table>
        <div style="margin-top: 24px;">
          <p style="font-size: 12px; color: #6B6A62; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Message</p>
          <p style="font-size: 14px; color: #1A1A18; line-height: 1.7; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
      <div style="padding: 16px 32px; background: #F5F4EF; border: 1px solid #E8E6DE; border-top: none;">
        <p style="font-size: 11px; color: #C9CBBE; margin: 0;">Reply directly to this email to respond to ${name}.</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"XiliHerb Website" <${process.env.GMAIL_USER}>`,
      to: "info@xiliherb.com",
      replyTo: email,
      subject: `New Inquiry — ${inquiryLabels[inquiry] ?? "General"} from ${name}`,
      html,
    });
    return { ok: true };
  } catch (err) {
    console.error("sendEmail error:", err);
    return { ok: false, error: "Failed to send. Please try again or email us directly." };
  }
}
