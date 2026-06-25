import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { email, website } = body

  // Honeypot — silent discard
  if (website) return NextResponse.json({ ok: true })

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
  }

  // TODO: connect to a mailing list service (Mailchimp / Brevo / Resend) or database
  // The original form_nl.php sent to: info@dhanalakshmiagroproducts.com + kalparuchi75@gmail.com
  console.log('Newsletter subscription:', { email })

  return NextResponse.json({ ok: true })
}
