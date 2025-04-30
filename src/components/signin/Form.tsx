import { colors } from '@/styles/colorPalette'
import { css } from '@emotion/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../shared/Button'
import FixedBottomButton from '../shared/FixedBottomButton'
import Flex from '../shared/Flex'
import Spacing from '../shared/Spacing'
import Text from '../shared/Text'
import TextField from '../shared/TextField'

export default function Form() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })
  return (
    <Flex direction="column" css={formContainerStyles}>
      <TextField
        label="이메일"
        name="email"
        placeholder="이메일을 입력해주세요"
      ></TextField>
      <Spacing size={16} />

      <TextField label="패스워드" name="password" type="password"></TextField>
      <Spacing size={32} />

      <Button size="medium">로그인</Button>
      <Spacing size={12} />

      <Link to="/signup" css={linkStyles}>
        <Text typography="t7">아직 아이디가 없으신가요?</Text>
      </Link>
    </Flex>
  )
}

const formContainerStyles = css`
  padding: 24px;
`

const linkStyles = css`
  text-align: center;

  & > span:hover {
    color: ${colors.blue};
  }
`
