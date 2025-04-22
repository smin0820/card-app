import './App.css'
import Text from '@shared/Text'
import Button from '@shared/Button'
import Input from './components/shared/input'
import TextField from './components/shared/TextField'
import Alert from './components/shared/Alert'
import { useAlertContext } from './contexts/AlertContext'

function App() {
  const { open } = useAlertContext()
  return (
    <div>
      <Text typography="t1" display="block">
        t1
      </Text>
      <Text typography="t2" color="red">
        t2
      </Text>
      <Text typography="t3">t3</Text>
      <Text typography="t4">t4</Text>
      <Text>t5</Text>

      <div style={{ height: 10, width: '100%', background: '#efefef' }}></div>

      <Button>클릭해주세요</Button>
      <Button color="success">클릭해주세요</Button>
      <Button color="error">클릭해주세요</Button>
      <Button color="error" weak={true}>
        클릭해주세요
      </Button>

      <Input placeholder="로그인" aria-invalid={false} />
      <Input aria-invalid={true} />

      <TextField label="아이디" />
      <TextField label="패스워드" />

      {/* <Alert
        open={true}
        description="안녕하세요"
        title="알럿이 떳습니다"
        onButtonClick={() => {}}
      /> */}

      <Button
        onClick={() => {
          open({
            title: '카드 신청 완료',
            description: '내역 페이지에서 확인해주세요',
            onButtonClick: () => {
              //
            },
          })
        }}
      >
        Alert 오픈
      </Button>
    </div>
  )
}

export default App
