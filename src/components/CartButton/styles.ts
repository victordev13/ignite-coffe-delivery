import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  padding: 5px 6px;
  border-radius: 6px;
  height: 36px;
  width: 36px;
  background: ${({ theme }) => theme.colors['purple-dark']};
  color: ${({ theme }) => theme.colors.white};

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  svg {
    vertical-align: middle;
  }
`
