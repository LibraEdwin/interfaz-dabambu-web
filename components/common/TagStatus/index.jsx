import { TagStatusWrapper } from './tagStatus.styled'

const TagStatus = ({ children, variante, ...res }) => {
  return (
    <TagStatusWrapper variante={variante} {...res}>
      {children}
    </TagStatusWrapper>
  )
}

export default TagStatus
