import { ApplyValues } from '@/models/apply'
import BasicInfo from '@components/apply/BasicInfo'
import CardInfo from '@components/apply/CardInfo'
import Terms from '@components/apply/Terms'
import { useState } from 'react'

export default function ApplyPage() {
  const [step, setStep] = useState(1)

  const handleTermsChange = (terms: ApplyValues['terms']) => {
    console.log('terms', terms)
  }

  const handleBasicInfo = (
    infoValues: Pick<ApplyValues, 'salary' | 'creditScore' | 'payDate'>,
  ) => {
    console.log('infoValues', infoValues)
  }
  return (
    <div>
      {step === 0 ? <Terms onNext={handleTermsChange} /> : null}
      {step === 1 ? <BasicInfo onNext={handleBasicInfo} /> : null}
      {step === 2 ? <CardInfo /> : null}
    </div>
  )
}
