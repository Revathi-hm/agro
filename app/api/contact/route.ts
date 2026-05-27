import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, company, phone, product, message, website } = body

  if (website) return NextResponse.json({ ok: true }) // honeypot

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  console.log('Contact enquiry:', { name, email, company, phone, product, message })

  return NextResponse.json({ ok: true })
}
