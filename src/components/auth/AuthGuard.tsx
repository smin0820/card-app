import { auth } from '@/remote/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'

// 인증 처리
export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [initialize, setInitialize] = useState(false)

  onAuthStateChanged(auth, (user) => {
    setInitialize(true)
  })

  if (initialize === false) {
    return <div>인증처리중...</div>
  }
  return <>{children}</>
}
