import { Container } from './styles'

export function Cart() {
  return (
    <Container>
      <div>
        <div>address</div>
        <div>payment</div>
      </div>
      <div>
        <div>cartitems</div>
        <div>total</div>
        <button type="submit">Confirmar Pedido</button>
      </div>
    </Container>
  )
}
