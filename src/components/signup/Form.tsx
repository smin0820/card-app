import { css } from '@emotion/react'
import FixedBottomButton from '@shared/FixedBottomButton'
import Flex from '@shared/Flex'
import TextField from '@shared/TextField'
import Spacing from '@shared/Spacing'
import { ChangeEvent, useCallback, useState } from 'react'
import { FormValues } from '@/models/signup'

export default function Form() {
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
    rePassword: '',
    name: '',
  })

  const handleFormValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [e.target.name]: e.target.value,
    }))
  }, [])

  console.log('formValues', formValues)

  return (
    <Flex direction="column" css={formContainerStyles}>
      <TextField
        label="이메일"
        name="email"
        placeholder="card@gmail.com"
        value={formValues.email}
        onChange={handleFormValues}
      />
      <Spacing size={16} />
      <TextField
        label="패스워드"
        name="password"
        type="password"
        value={formValues.password}
        onChange={handleFormValues}
      />
      <Spacing size={16} />
      <TextField
        label="패스워드 재확인"
        name="rePassword"
        type="password"
        value={formValues.rePassword}
        onChange={handleFormValues}
      />
      <Spacing size={16} />
      <TextField
        label="이름"
        name="name"
        placeholder="홍길동"
        value={formValues.name}
        onChange={handleFormValues}
      />

      <FixedBottomButton label="회원가입" onClick={() => {}} disabled={true} />
    </Flex>
  )
}

const formContainerStyles = css`
  padding: 24px;
`
