import { FormEvent, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
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
  const [itemAddedToCart, setItemAddedToCart] = useState(false)

  const { handleAddItemToCart } = useContext(CartContext)

  function handleAddToCart(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault()

    handleAddItemToCart({
      id: new Date().toTimeString(),
      count,
      coffee,
    })
    setItemAddedToCart(true)
  }

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
            <CartButton onClick={handleAddToCart} />
          </div>
        </FooterContainer>
        {itemAddedToCart && <Link to="/cart">Ver Item no Carrinho</Link>}
      </CardContent>
    </CardContainer>
  )
}
