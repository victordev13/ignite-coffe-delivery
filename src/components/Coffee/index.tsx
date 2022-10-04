import { FormEvent, useState } from 'react'
import { ICoffee } from '../../pages/Home'
import { formatMoney } from '../../utils/money'
import { CartButton } from '../CartButton'
import { InputCounter } from '../InputCounter'
import {
  CardContainer,
  CardContent,
  FooterContainer,
  Tag,
  Title,
} from './styles'

interface Props {
  coffee: ICoffee
}

export function Coffee({ coffee }: Props) {
  const [count, setCount] = useState(1)

  function handleAddToCart(event: FormEvent<HTMLButtonElement>) {} // todo

  return (
    <CardContainer>
      <img src={coffee.image} width={100} height={100} />
      <div>
        {coffee.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <CardContent>
        <header>
          <Title>{coffee.name}</Title>
          <p>{coffee.description}</p>
        </header>
        <FooterContainer>
          <p>
            <span>R$</span>
            {formatMoney(coffee.price)}
          </p>
          <div>
            <InputCounter
              value={count}
              onIncrement={(value) => setCount(value)}
              onDecrement={(value) => setCount(value)}
            />
            <CartButton onChange={handleAddToCart} />
          </div>
        </FooterContainer>
      </CardContent>
    </CardContainer>
  )
}
