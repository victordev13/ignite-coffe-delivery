import { FormEvent, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
      value: coffee.price,
      count,
      amount: coffee.price * count,
    })
    setItemAddedToCart(true)
  }

  const navigate = useNavigate()

  function handleGoToCart() {
    navigate('/cart')
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
