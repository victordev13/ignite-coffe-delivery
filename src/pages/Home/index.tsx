import { Background, Container, ItemsContainer } from './styles'
import CoffeIntroImage from '../../assets/coffee-intro-image.png'

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
              <li>Compra simples e segura</li>
              <li>Embalagem mantém o café intacto</li>
              <li>Entrega rápida e rastreada</li>
              <li>O café chega fresquinho até você</li>
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
