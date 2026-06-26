import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const TO = 'info@dhanalakshmiagroproducts.com'
const CC = 'kalparuchi75@gmail.com'

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

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { email, website } = body

  // Honeypot — silent discard
  if (website) return NextResponse.json({ ok: true })

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
  }

  const transport = makeTransport()

  if (transport) {
    try {
      await transport.sendMail({
        from:    `"Dhanalakshmi Agro Website" <${process.env.SMTP_USER}>`,
        to:      TO,
        cc:      CC,
        subject: 'New Newsletter Subscription',
        html:    `<p style="font-family:sans-serif;font-size:14px">New subscriber: <strong>${email}</strong></p>`,
      })
    } catch (err) {
      console.error('[newsletter] Email send failed:', err)
    }
  } else {
    console.warn('[newsletter] SMTP not configured.')
    console.log('[newsletter] Subscription:', { email })
  }

  return NextResponse.json({ ok: true })
}
