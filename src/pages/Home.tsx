import ListRow from '@/components/shared/ListRow'
import AdBanners from '@components/home/AdBanners'
import CardList from '@components/home/CardList'
import Top from '@components/shared/Top'
import { Suspense } from 'react'

export default function HomePage() {
  return (
    <div>
      <Top
        title="혜택 좋은 카드"
        subTitle="회원님을 위해서 혜택 좋은 카드를 모아봤어요"
      ></Top>
      <AdBanners />
      <Suspense
        fallback={[...new Array(10)].map((_, idx) => (
          <ListRow.Skeleton key={idx} />
        ))}
      >
        <CardList />
      </Suspense>
    </div>
  )
}
