'use client'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const { signIn, loading, error } = useAuth()
  const router = useRouter()
  const [waiting, setWaiting] = useState(false)
  const delay = (ms: number) => new Promise((r) => setTimeout(r, ms))
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = String(formData.get('email') || '')
    const password = String(formData.get('password') || '')
    setWaiting(true)
    const [res] = await Promise.all([signIn(email, password), delay(1500)])
    setWaiting(false)
    if (res.ok) {
      router.push('/dashboard')
    }
  }

  return (
    <main className="container min-h-[70vh] grid place-items-center">
      <div className="w-full max-w-md mx-auto bg-panel rounded-xl brand-border p-6 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="font-display text-2xl">Bem-vindo de volta</h1>
          <p className="text-text-secondary text-sm">
            Entre para acessar seus protocolos
          </p>
        </div>

        {error ? (
          <div className="rounded-md border border-brand-red bg-brand-red/10 p-3 text-sm text-brand-red">
            {error}
          </div>
        ) : null}

        <form onSubmit={onSubmit} className="space-y-4">
          <Input label="E-mail" name="email" type="email" placeholder="voce@exemplo.com" />
          <Input label="Senha" name="password" type="password" placeholder="••••••••" />
          <Button type="submit" variant="primary" className="w-full" loading={waiting || loading} loadingLabel="Entrando…">Entrar</Button>
          <div className="text-xs text-text-secondary text-center">
            Não tem conta? <a className="underline hover:text-white" href="/register">Criar conta</a>
          </div>
        </form>
      </div>
    </main>
  )
}
