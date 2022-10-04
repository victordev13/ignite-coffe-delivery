import { ShoppingCartSimple } from 'phosphor-react'
import { HTMLAttributes } from 'react'
import { Button } from './styles'

interface Props extends HTMLAttributes<HTMLButtonElement> {}

export function CartButton({ ...props }: Props) {
  return (
    <Button {...props}>
      <ShoppingCartSimple size={16} weight="fill" />
    </Button>
  )
}
