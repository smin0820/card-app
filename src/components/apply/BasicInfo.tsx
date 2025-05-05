import { ApplyValues } from '@/models/apply'
import Select from '@components/shared/Select'
import { 연소득옵션, 신용점수옵션, 결제일옵션 } from '@constant/apply'
import { ChangeEvent, useCallback, useState } from 'react'
import FixedBottomButton from '../shared/FixedBottomButton'

type InfoValues = Pick<ApplyValues, 'salary' | 'creditScore' | 'payDate'>

export default function BasicInfo({
  onNext,
}: {
  onNext: (infoValues: InfoValues) => void
}) {
  const [infoValues, setInfoValues] = useState<InfoValues>({
    salary: '',
    creditScore: '',
    payDate: '',
  })

  const handleInfoChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setInfoValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }))
  }, [])

  const 모든정보가선택되었는가 = Object.values(infoValues).every(
    (value) => value,
  )
  return (
    <div>
      <Select
        name="salary"
        label="연소득옵션"
        options={연소득옵션}
        placeholder={연소득옵션[0].label}
        value={infoValues.salary}
        onChange={handleInfoChange}
      />
      <Select
        name="creditScore"
        label="신용점수옵션"
        options={신용점수옵션}
        placeholder={신용점수옵션[0].label}
        value={infoValues.creditScore}
        onChange={handleInfoChange}
      />
      <Select
        name="payDate"
        label="결제일옵션"
        options={결제일옵션}
        placeholder={결제일옵션[0].label}
        value={infoValues.payDate}
        onChange={handleInfoChange}
      />

      <FixedBottomButton
        label="다음"
        onClick={() => {
          onNext(infoValues)
        }}
        disabled={모든정보가선택되었는가 === false}
      />
    </div>
  )
}
