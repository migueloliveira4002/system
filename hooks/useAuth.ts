'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export function useAuth() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    setError(null)
    try {
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        throw new Error('Configuração do Supabase ausente')
      }
      const { error: err } = await supabase.auth.signInWithPassword({ email, password })
      if (err) throw err
      await supabase.auth.getSession()
      return { ok: true }
    } catch (e: any) {
      setError(e?.message ?? 'Erro ao autenticar')
      return { ok: false, error: e }
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (email: string, password: string) => {
    setLoading(true)
    setError(null)
    try {
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        throw new Error('Configuração do Supabase ausente')
      }
      const { error: err } = await supabase.auth.signUp({ email, password })
      if (err) throw err
      return { ok: true }
    } catch (e: any) {
      setError(e?.message ?? 'Erro ao registrar')
      return { ok: false, error: e }
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    setLoading(true)
    setError(null)
    try {
      const { error: err } = await supabase.auth.signOut()
      if (err) throw err
      return { ok: true }
    } catch (e: any) {
      setError(e?.message ?? 'Erro ao sair')
      return { ok: false, error: e }
    } finally {
      setLoading(false)
    }
  }

  return { signIn, signUp, signOut, loading, error }
}
