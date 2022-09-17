import styled from 'styled-components'

interface ButtonProps {
  variation: 'purple' | 'yellow'
}

export const Button = styled.button<ButtonProps>`
  border: none;
  padding: 10px;
  border-radius: 0.5rem;
  background: ${({ variation, theme }) =>
    variation === 'yellow'
      ? theme.colors['yellow-light']
      : theme.colors['base-button']};

  color: ${({ variation, theme }) =>
    variation === 'yellow'
      ? theme.colors['yellow-dark']
      : theme.colors['purple-dark']};

  &:hover {
    background: ${({ variation, theme }) =>
      variation === 'purple' && theme.colors['base-hover']};
    filter: ${({ variation, theme }) =>
      variation === 'yellow' && 'brightness(.9)'};
  }

  svg {
    vertical-align: sub;
    color: ${({ variation, theme }) =>
      variation === 'yellow'
        ? theme.colors['yellow-dark']
        : theme.colors['purple-dark']};
  }
`