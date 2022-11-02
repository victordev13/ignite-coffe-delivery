import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  background-color: ${(props) => props.theme.colors['base-input']};
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  padding: 0.75rem;
  border-radius: 0.25rem;
  color: ${(props) => props.theme.colors['base-text']};

  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }
`

type Props = InputHTMLAttributes<HTMLInputElement>

export function TextInput({ ...props }: Props) {
  return <Input {...props} />
}
