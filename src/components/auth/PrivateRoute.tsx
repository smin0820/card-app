// 유저의 정보를 받아서 어떤 페이지로 보낼 지를 결정하는 컴포넌트
import useUser from '@hooks/auth/useUser'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const user = useUser()

  if (user == null) {
    return <Navigate to="/signin" replace={true} />
  }
  return <>{children}</>
}
