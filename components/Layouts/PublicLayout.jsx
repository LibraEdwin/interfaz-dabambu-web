import NavBar from '../NavBar'
import Footer from '../Footer'
import { MainWrapper } from './pulicLayout.styled'
import PropTypes from 'prop-types'

const PublicLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <MainWrapper>
        {children}
      </MainWrapper>
      <Footer />
    </>
  )
}

PublicLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default PublicLayout
