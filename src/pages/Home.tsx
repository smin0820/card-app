import Top from '@/components/shared/Top'
import { getadBanners } from '@/remote/adBanner'
import { getCards } from '@/remote/card'
import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    getCards().then((response) => {
      console.log('response', response)
    })

    getadBanners().then((response) => {
      console.log('response', response)
    })
  }, [])
  return (
    <div>
      <Top
        title="혜택 좋은 카드"
        subTitle="회원님을 위해서 혜택 좋은 카드를 모아봤어요"
      ></Top>
    </div>
  )
}
