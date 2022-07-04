import styled from 'styled-components'

export const FilterWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 50%;
  align-items: flex-end;
`

export const FormControl = styled.input`
  width: 100%;
  padding: 0.5em 1em;
  height: auto;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
`

export const FormLabel = styled.label`
  color: ${({ theme }) => theme.colors.mainColor};
  display: inline-block;
  margin-bottom: 0.4rem;
  font-weight: 700;
  font-size: 14px;
`
