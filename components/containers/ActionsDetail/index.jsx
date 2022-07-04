import { ActionsDetailWrapper } from './actionsDetalle.styled'
import BackButton from 'components/common/BackButton'
import { useRouter } from 'next/router'

const ActionsDetail = ({ children }) => {
  const router = useRouter()

  const back = () => {
    router.push('/tienda')
    localStorage.removeItem('url_product')
  }

  return (
    <ActionsDetailWrapper>
      <BackButton text="Ir a tienda" onClick={() => back()} />
      {children}
    </ActionsDetailWrapper>
  )
}

export default ActionsDetail
