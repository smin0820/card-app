import { getCards } from '@/remote/card'
import React from 'react'
import { useQuery } from 'react-query'
import ListRow from '../shared/ListRow'

export default function CardList() {
  const { data } = useQuery(['cards'], () => getCards())

  if (data === null) {
    return null
  }

  return (
    <div>
      <ul>
        {data?.map((card, index) => {
          return (
            <ListRow
              key={card.id}
              contents={
                <ListRow.Texts title={`${index + 1}`} subTitle={card.name} />
              }
              right={card.payback != null ? <div>{card.payback}</div> : null}
              withArrow={true}
            />
          )
        })}
      </ul>
    </div>
  )
}
