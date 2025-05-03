import { MouseEvent } from 'react'
import { colors } from '@/styles/colorPalette'
import { css } from '@emotion/react'
import Flex from './Flex'
import Text from './Text'

export default function Agreement({ children }: { children: React.ReactNode }) {
  return (
    <Flex as="ul" direction="column" css={agreementContainerStyles}>
      {children}
    </Flex>
  )
}

function AgreementTitle({
  children,
  checked,
  onChange,
}: {
  children: React.ReactNode
  checked: Boolean
  onChange: (e: MouseEvent<HTMLElement>, checked: boolean) => void
}) {
  return (
    <Flex as="li" onClick={(e) => onChange(e, !checked)}>
      <IconCheck checked={checked} withCircle={true} />
      <Text bold={true}>{children}</Text>
    </Flex>
  )
}

function AgreementDescription({
  children,
  checked,
  onChange,
  link,
}: {
  children: React.ReactNode
  checked: Boolean
  onChange: (e: MouseEvent<HTMLElement>, checked: boolean) => void
  link?: string
}) {
  return (
    <Flex as="li" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Flex onClick={(e) => onChange(e, !checked)}>
        <IconCheck checked={checked} />
        <Text typography="t6">{children}</Text>
      </Flex>
      {link != null ? (
        <a href={link} target="_blank" rel="noreferrer">
          <Text typography="t6">링크</Text>
        </a>
      ) : null}
    </Flex>
  )
}

Agreement.Title = AgreementTitle
Agreement.Description = AgreementDescription

function IconCheck({
  checked,
  withCircle = false,
}: {
  checked: Boolean
  withCircle?: Boolean
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.4129 8.93857L10.5 16.4799L6.58712 12.2113L8.06143 10.8598L10.5 13.5201L15.9386 7.58712L17.4129 8.93857Z"
        fill={checked === true ? colors.blue : colors.grey}
      />
      {withCircle ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
          fill={checked === true ? colors.blue : colors.grey}
        />
      ) : null}
    </svg>
  )
}

const agreementContainerStyles = css`
  padding: 24px;

  & li {
    cursor: pointer;
  }
`
