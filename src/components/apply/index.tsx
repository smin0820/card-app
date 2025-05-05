import { ApplyValues } from '@/models/apply'
import BasicInfo from '@components/apply/BasicInfo'
import CardInfo from '@components/apply/CardInfo'
import Terms from '@components/apply/Terms'

export default function Apply({
  step,
  onSubmit,
}: {
  step: number
  onSubmit: () => void
}) {
  const handleTermsChange = (terms: ApplyValues['terms']) => {
    console.log('terms', terms)
  }

  const handleBasicInfoChange = (
    infoValues: Pick<ApplyValues, 'salary' | 'creditScore' | 'payDate'>,
  ) => {
    console.log('infoValues', infoValues)
  }

  const handleCardInfoChange = (
    cardInfoValues: Pick<ApplyValues, 'isHipass' | 'isMaster' | 'isRf'>,
  ) => {
    console.log('cardInfoValues', cardInfoValues)
  }
  return (
    <div>
      {step === 0 ? <Terms onNext={handleTermsChange} /> : null}
      {step === 1 ? <BasicInfo onNext={handleBasicInfoChange} /> : null}
      {step === 2 ? <CardInfo onNext={handleCardInfoChange} /> : null}
    </div>
  )
}
