import { colors } from '@/styles/colorPalette'
import Styled from '@emotion/styled'
import React from 'react'

const BaseProgessBar = Styled.div<{ progress: number }>(({ progress }) => ({
  height: 10,
  backgroundColor: colors.blue,
  transform: `scaleX(${progress})`,
  transition: 'transform 0.3s',
  transformOrigin: 'left',
}))

const Container = Styled.div(() => ({
  width: '100%',
  height: 10,
  backgroundColor: colors.grey,
  overflow: 'hidden',
  borderRadius: 6,
}))

export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <Container>
      <BaseProgessBar progress={progress} />
    </Container>
  )
}
