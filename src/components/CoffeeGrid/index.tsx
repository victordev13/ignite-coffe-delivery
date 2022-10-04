import { ICoffee } from '../../pages/Home'
import { Coffee } from '../Coffee'
import { Container } from './styles'

interface Props {
  coffees: ICoffee[]
}

export function CoffeeGrid({ coffees }: Props) {
  return (
    <Container>
      {coffees.map((coffee) => (
        <Coffee key={coffee.id} coffee={coffee} />
      ))}
    </Container>
  )
}
