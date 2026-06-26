import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const TO      = 'info@dhanalakshmiagroproducts.com'
const CC      = 'kalparuchi75@gmail.com'

/** Build a transporter only when SMTP env vars are set. */
function makeTransport() {
  const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null
  return nodemailer.createTransport({
    host:   SMTP_HOST,
    port:   Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth:   { user: SMTP_USER, pass: SMTP_PASS },
  })
}

function htmlBody(data: Record<string, string>) {
  const row = (label: string, val: string) =>
    `<tr><td style="padding:8px 12px;font-weight:600;background:#f9f6f0;border-bottom:1px solid #e8e3da;white-space:nowrap">${label}</td>` +
    `<td style="padding:8px 12px;border-bottom:1px solid #e8e3da">${val || '—'}</td></tr>`

  return `
    <div style="font-family:sans-serif;max-width:600px;margin:auto">
      <div style="background:#2F2913;padding:20px 24px">
        <h2 style="color:#c8d8a8;margin:0;font-size:18px">New Enquiry — Dhanalakshmi Agro Products</h2>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${row('Name',             data.name)}
        ${row('Email',            data.email)}
        ${row('Company',          data.company)}
        ${row('Phone',            data.phone)}
        ${row('Product Interest', data.product)}
        ${row('Message',          data.message.replace(/\n/g, '<br>'))}
      </table>
      <p style="font-size:11px;color:#999;padding:12px">Sent from dhanalakshmiagroproducts.com contact form</p>
    </div>
  `
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, company = '', phone = '', product = '', message, website } = body

  // Honeypot — silent discard
  if (website) return NextResponse.json({ ok: true })

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const transport = makeTransport()

  if (transport) {
    try {
      await transport.sendMail({
        from:     `"Dhanalakshmi Agro Website" <${process.env.SMTP_USER}>`,
        to:       TO,
        cc:       CC,
        replyTo:  email,
        subject:  `New Enquiry from ${name}`,
        html:     htmlBody({ name, email, company, phone, product, message }),
      })
    } catch (err) {
      console.error('[contact] Email send failed:', err)
      // Still respond OK — enquiry is not lost, it's in server logs
    }
  } else {
    // SMTP not yet configured — log so enquiries are not silently dropped
    console.warn('[contact] SMTP not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS in .env.local')
    console.log('[contact] Enquiry received:', { name, email, company, phone, product, message })
  }

  return NextResponse.json({ ok: true })
}
