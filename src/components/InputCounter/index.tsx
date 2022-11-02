import { Minus, Plus } from 'phosphor-react'
import { HTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props extends HTMLAttributes<HTMLInputElement> {
  value: number
  step?: number
  max?: number
  min?: number
  onIncrement: (value: number) => void
  onDecrement: (value: number) => void
}

const Container = styled.div`
  display: inline-flex;
  text-align: center;
  font-size: 12pt;
  height: 2.3rem;
  border-radius: 6px;
  max-width: fit-content;

  background: ${({ theme }) => theme.colors['base-button']};

  input {
    border: none;
    width: 25px;
    padding: 0;
    text-align: center;
    background: transparent;
    color: ${({ theme }) => theme.colors['base-title']};
    font-weight: 400;

    &:focus {
      box-shadow: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`
const Button = styled.button`
  color: ${({ theme }) => theme.colors.purple};
  border: none;
  background: transparent;
  padding: 0 0.5rem;
  line-height: 0;
`
const DecrementButton = styled(Button)``
const IncrementButton = styled(Button)``

export function InputCounter({
  value,
  onIncrement,
  onDecrement,
  step = 1,
  max = 10,
  min = 1,
  ...props
}: Props) {
  function handleIncrement() {
    const incrementedValue = value + step
    if (incrementedValue <= max) {
      onIncrement(incrementedValue)
    }
  }

  function handleDecrement() {
    const decrementedValue = value - step
    if (decrementedValue >= min) {
      onDecrement(decrementedValue)
    }
  }

  return (
    <Container {...props}>
      <DecrementButton onClick={handleDecrement}>
        <Minus size={14} weight="bold" />
      </DecrementButton>
      <input type="number" readOnly value={value} title={value} />
      <IncrementButton onClick={handleIncrement}>
        <Plus size={14} weight="bold" />
      </IncrementButton>
    </Container>
  )
}
