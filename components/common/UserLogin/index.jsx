import { UserLoginWrapper, UserName } from './userLogin.styled'
import User from 'components/icons/User'

const UserLogin = ({ user }) => {
  return (
    <UserLoginWrapper>
      <h3>Bienvenido:</h3>
      <UserName><User />{user}</UserName>
    </UserLoginWrapper>
  )
}

export default UserLogin
