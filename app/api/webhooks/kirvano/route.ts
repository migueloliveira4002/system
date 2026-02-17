import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { randomBytes } from 'crypto'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type KirvanoPayload = {
  token?: string
  data?: {
    customer?: {
      email?: string
      name?: string
    }
  }
}

function getEnv(name: string) {
  const v = process.env[name]
  if (!v) throw new Error(`${name} not set`)
  return v
}

function randomPassword(length = 16) {
  return randomBytes(length).toString('base64').slice(0, length)
}

export async function POST(req: Request) {
  try {
    const kirvanoToken = process.env.KIRVANO_WEBHOOK_TOKEN || ''
    if (!kirvanoToken) {
      console.error('KIRVANO_WEBHOOK_TOKEN missing')
      return NextResponse.json({ ok: false }, { status: 500 })
    }

    const headerToken = req.headers.get('x-kirvano-token') || ''
    let body: KirvanoPayload | null = null
    try {
      body = await req.json()
    } catch {
      body = null
    }
    const bodyToken = body?.token || ''
    if (headerToken !== kirvanoToken && bodyToken !== kirvanoToken) {
      console.warn('Invalid token')
      return NextResponse.json({ ok: false }, { status: 401 })
    }

    const email = body?.data?.customer?.email?.trim()?.toLowerCase() || ''
    const name = body?.data?.customer?.name || ''
    if (!email) {
      console.warn('Missing email in payload')
      return NextResponse.json({ ok: false }, { status: 400 })
    }

    const url = getEnv('NEXT_PUBLIC_SUPABASE_URL')
    const serviceKey = getEnv('SUPABASE_SERVICE_ROLE_KEY')
    const resendKey = getEnv('RESEND_API_KEY')

    const supabase = createClient(url, serviceKey)
    const password = randomPassword(20)

    console.log('Kirvano webhook: creating user', email)
    const { data: created, error: createErr } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { name },
    })
    if (createErr) {
      console.error('Supabase createUser error', createErr.message)
      return NextResponse.json({ ok: false }, { status: 500 })
    }

    const resend = new Resend(resendKey)
    console.log('Kirvano webhook: sending email', email)
    await resend.emails.send({
      from: 'SouKore <no-reply@soukore.com.br>',
      to: email,
      subject: 'Bem-vindo ao Protocolo H-Natural',
      text: [
        `Olá ${name || 'Titã'},`,
        ``,
        `Seu acesso ao Protocolo H-Natural foi liberado.`,
        `Acesse: https://soukore.com.br`,
        ``,
        `Credenciais:`,
        `Email: ${email}`,
        `Senha provisória: ${password}`,
        ``,
        `Recomenda-se alterar a senha após o primeiro login.`,
      ].join('\n'),
    })

    console.log('Kirvano webhook: done', created?.user?.id || 'no_id')
    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (e: any) {
    console.error('Kirvano webhook fatal', e?.message || 'unknown')
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
