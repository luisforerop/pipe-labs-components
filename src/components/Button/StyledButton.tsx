import styled from 'styled-components'

type StyledButtonProps = {
  color: string
  backgroundColor: string
  border: string
  width: string
}

export const StyledButton = styled.button<StyledButtonProps>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  padding: 8px 16px;
  border: ${(props) => props.border};
  border-radius: 8px;
  width: ${(props) => props.width};
`
