'use client'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const { signUp, loading, error } = useAuth()
  const router = useRouter()
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = String(formData.get('email') || '')
    const password = String(formData.get('password') || '')
    const res = await signUp(email, password)
    if (res.ok) {
      router.push('/dashboard')
    }
  }

  return (
    <main className="container min-h-[70vh] grid place-items-center">
      <div className="w-full max-w-md mx-auto bg-panel rounded-xl brand-border p-6 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="font-display text-2xl">Crie sua conta</h1>
          <p className="text-text-secondary text-sm">
            Acesso imediato aos protocolos
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
          <Button type="submit" variant="primary" className="w-full" loading={loading}>Registrar</Button>
          <div className="text-xs text-text-secondary text-center">
            Já tem conta? <a className="underline hover:text-white" href="/login">Entrar</a>
          </div>
        </form>
      </div>
    </main>
  )
}
