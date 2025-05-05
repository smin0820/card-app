import Apply from '@/components/apply'
import { useState } from 'react'

export default function ApplyPage() {
  const [step, setStep] = useState(2)

  const handleSubmit = () => {}

  return <Apply step={step} onSubmit={handleSubmit} />
}
