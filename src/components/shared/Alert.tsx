import { colors } from '@/styles/colorPalette'
import styled from '@emotion/styled'

import React from 'react'
import Button from './Button'
import Dimmed from './Dimmed'
import Flex from './Flex'
import Text from './Text'

interface AlertProps {
  open?: boolean
  title: React.ReactNode
  description?: React.ReactNode
  buttonLabel?: string
  onButtonClick: () => void
}

export default function Alert({
  open,
  title,
  description,
  buttonLabel = '확인',
  onButtonClick,
}: AlertProps) {
  if (open === false) {
    return null
  }
  return (
    <Dimmed>
      <AlertConTainer>
        <Text
          typography="t4"
          bold={true}
          display="block"
          style={{ marginBottom: 6 }}
        >
          {title}
        </Text>
        {description ? <Text typography="t7">{description}</Text> : null}
        <Flex justify="flex-end">
          <Button
            onClick={onButtonClick}
            weak={true}
            style={{ marginTop: 12, border: 'none' }}
          >
            {buttonLabel}
          </Button>
        </Flex>
      </AlertConTainer>
    </Dimmed>
  )
}

const AlertConTainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.white};
  border-radius: 8px;
  overflow: hidden;
  z-index: var(--alert-zindex);
  width: 320px;
  padding: 24px;
  box-sizing: border-box;
`
