import { APPLY_STATUS } from '@/models/apply'
import { useQuery } from 'react-query'

interface usePollApplyStatusProps {
  onSuccess: () => void
  onError: () => void
  enabled: boolean
}

export default function usePollApplyStatus({
  enabled,
  onSuccess,
  onError,
}: usePollApplyStatusProps) {
  return useQuery(['applyStatus'], () => getApplyStatus(), {
    enabled,
    refetchInterval: 2_00,
    staleTime: 0,
    onSuccess: (status) => {
      if (status === APPLY_STATUS.COMPLETE) {
        onSuccess()
      }
    },
    onError: () => {
      onError()
    },
  })
}

function getApplyStatus() {
  const values = [
    APPLY_STATUS.READY,
    APPLY_STATUS.PROGRESS,
    APPLY_STATUS.COMPLETE,
    APPLY_STATUS.REJECT,
  ]

  const status = values[Math.floor(Math.random() * values.length)]

  if (status === APPLY_STATUS.REJECT) {
    throw new Error('카드 발금에 실패했습니다.')
  }

  return status
}
