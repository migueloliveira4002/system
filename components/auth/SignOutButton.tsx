'use client'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function SignOutButton() {
  const { signOut, loading } = useAuth()
  const router = useRouter()
  const [waiting, setWaiting] = useState(false)

  const onClick = async () => {
    setWaiting(true)
    await new Promise((r) => setTimeout(r, 3000))
    const res = await signOut()
    if (res.ok) {
      router.push('/login')
    }
    setWaiting(false)
  }

  return (
    <Button variant="secondary" size="sm" onClick={onClick} loading={waiting || loading} loadingLabel="Saindo…">
      Sair
    </Button>
  )
}
