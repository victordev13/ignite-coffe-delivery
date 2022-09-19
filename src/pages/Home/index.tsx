import { Background, Container, IconContainer, ItemsContainer } from './styles'
import CoffeIntroImage from '../../assets/coffee-intro-image.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export default function Home() {
  return (
    <>
      <Background />
      <Container>
        <div>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <ItemsContainer>
            <ul>
              <li>
                <IconContainer bg="yellow-dark">
                  <ShoppingCart weight="fill" size={16} color="white" />
                </IconContainer>
                Compra simples e segura
              </li>
              <li>
                <IconContainer bg="base-text">
                  <Package weight="fill" size={16} color="white" />
                </IconContainer>
                Embalagem mantém o café intacto
              </li>
              <li>
                <IconContainer bg="yellow">
                  <Timer weight="fill" size={16} color="white" />
                </IconContainer>
                Entrega rápida e rastreada
              </li>
              <li>
                <IconContainer bg="purple">
                  <Coffee weight="fill" size={16} color="white" />
                </IconContainer>
                O café chega fresquinho até você
              </li>
            </ul>
          </ItemsContainer>
        </div>
        <div>
          <img src={CoffeIntroImage} />
        </div>
      </Container>
    </>
  )
}
