import { HTMLAttributes, ReactElement, ReactNode } from 'react'
import { Button } from './styles'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  icon: ReactElement
  position?: 'left' | 'right'
  variation?: 'purple' | 'yellow'
}

export default function IconButton({
  children,
  icon,
  position = 'left',
  variation = 'purple',
  ...props
}: Props) {
  return (
    <Button variation={variation} {...props}>
      {position === 'left' ? icon : ''}
      {children}
      {position === 'right' ? icon : ''}
    </Button>
  )
}
