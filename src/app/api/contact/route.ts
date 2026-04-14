import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      return new NextResponse(null, { status: 200, headers });
    }

    if (req.method !== 'POST') {
      return NextResponse.json({ error: 'Method not allowed' }, { status: 405, headers });
    }

    let body;
    try {
      body = await req.json();
    } catch (error) {
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400, headers });
    }

    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400, headers });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.CONTACT_EMAIL_USER,
        pass: process.env.CONTACT_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.CONTACT_EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#e5e5e5;border-radius:12px;overflow:hidden;">
          <div style="background:#1a1a2e;padding:24px 32px;border-bottom:1px solid #2a2a2a;">
            <h2 style="margin:0;color:#60a5fa;font-size:20px;">New Message from Portfolio</h2>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#888;width:100px;">Name</td><td style="padding:8px 0;color:#fff;font-weight:600;">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#888;">Email</td><td style="padding:8px 0;color:#60a5fa;">${email}</td></tr>
              <tr><td style="padding:8px 0;color:#888;">Subject</td><td style="padding:8px 0;color:#fff;">${subject}</td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #2a2a2a;margin:24px 0;" />
            <p style="color:#888;margin:0 0 8px;">Message</p>
            <p style="color:#e5e5e5;line-height:1.7;white-space:pre-wrap;margin:0;">${message}</p>
          </div>
          <div style="padding:16px 32px;background:#111;border-top:1px solid #2a2a2a;">
            <p style="margin:0;font-size:12px;color:#555;">Sent via ujwalpachghare.dev portfolio contact form</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { headers });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500, headers });
  }
}
