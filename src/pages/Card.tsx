import ListRow from '@/components/shared/ListRow'
import Top from '@/components/shared/Top'
import { getCard } from '@/remote/card'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

export default function CardPage() {
  const { id = '' } = useParams()

  const { data } = useQuery(['card', id], () => getCard(id), {
    enabled: id !== '',
  })

  if (data == null) {
    return null
  }

  const { name, corpName, promotion, tags, benefit } = data

  const subTitle =
    promotion != null ? removeHtmlTags(promotion.title) : tags.join(', ')

  return (
    <div>
      <Top title={`${corpName} ${name}`} subTitle={subTitle}></Top>

      <ul>
        {benefit.map((text, index) => {
          return (
            <ListRow
              key={text}
              left={<IconCheck />}
              contents={
                <ListRow.Texts title={`혜택 ${index + 1}`} subTitle={text} />
              }
            />
          )
        })}
      </ul>
    </div>
  )
}

function removeHtmlTags(text: string) {
  let output = ''

  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === '<') {
      for (let j = i + 1; j < text.length; j += 1) {
        if (text[j] === '>') {
          i = j
          break
        }
      }
    } else {
      output += text[i]
    }
  }
  return output
}

function IconCheck() {
  return (
    <svg
      height="23"
      width="23"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.21,14.75a1,1,0,0,0,1.42,0l4.08-4.08a1,1,0,0,0-1.42-1.42l-3.37,3.38L9.71,11.41a1,1,0,0,0-1.42,1.42ZM21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20Z"
        fill="#6563ff"
      />
    </svg>
  )
}
