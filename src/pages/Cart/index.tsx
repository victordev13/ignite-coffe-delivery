import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { useContext } from 'react'
import IconButton from '../../components/IconButton'
import { InputCounter } from '../../components/InputCounter'
import { TextInput } from '../../components/TextInput'
import { CartContext } from '../../contexts/CartContext'
import { CartItem } from '../../reducer/cart/reducer'
import { defaultTheme } from '../../styles/themes/default'
import { formatMoney } from '../../utils/money'
import {
  AddressContainer,
  CartItemOptions,
  CartItemsContainer,
  Container,
  FormContainer,
  FormGroup,
  PaymentContainer,
} from './styles'

export function Cart() {
  const {
    cart,
    handleRemoveItemFromCart,
    handleIncrementItemCount,
    handleDecrementItemCount,
  } = useContext(CartContext)

  const handleIncrementItem = (item: CartItem) => handleIncrementItemCount(item)
  const handleDecrementItem = (item: CartItem) => handleDecrementItemCount(item)
  const handleRemove = (item: CartItem) => handleRemoveItemFromCart(item)

  return (
    <Container>
      <div>
        <h4>Complete seu Pedido</h4>
        <AddressContainer>
          <header>
            <MapPinLine size={20} color={defaultTheme.colors.yellow} />
            <span>Endereço da Entrega</span>
            <p>Informe o Endereço onde deseja receber o seu pedido</p>
          </header>
          <FormContainer>
            <FormGroup>
              <TextInput placeholder="CEP" style={{ width: 'auto' }} />
            </FormGroup>
            <FormGroup>
              <TextInput placeholder="Rua" />
            </FormGroup>
            <FormGroup>
              <TextInput placeholder="Número" />
              <TextInput placeholder="Complemento" />
            </FormGroup>
            <FormGroup>
              <TextInput placeholder="Bairro" />
              <TextInput placeholder="Cidade" />
              <TextInput placeholder="UF" />
            </FormGroup>
          </FormContainer>
        </AddressContainer>
        <PaymentContainer>
          <div>
            <header>
              <CurrencyDollar size={20} color={defaultTheme.colors.purple} />
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </header>
            <input type="radio" value="credit-card" />
            <input type="radio" value="debit-card" />
            <input type="radio" value="money" />
            <IconButton icon={<CreditCard />}>Cartão de Crédito</IconButton>
            <IconButton icon={<Bank />}>Cartão de Débito</IconButton>
            <IconButton icon={<Money />}>Dinheiro</IconButton>
          </div>
        </PaymentContainer>
      </div>
      <div>
        <h4>Cafés selecionados</h4>
        <CartItemsContainer>
          {cart.items.map((item) => (
            <div key={item.id}>
              <img src={item.coffee.image} alt={`Coffee ${item.coffee.name}`} />
              <div>
                <div>
                  {item.coffee.name}
                  <span>R$ {formatMoney(item.totalValue)}</span>
                </div>
                <CartItemOptions>
                  <InputCounter
                    value={item.count}
                    onIncrement={() => handleIncrementItem(item)}
                    onDecrement={() => handleDecrementItem(item)}
                  />
                  <IconButton
                    icon={<Trash />}
                    onClick={() => handleRemove(item)}
                  >
                    Remover
                  </IconButton>
                </CartItemOptions>
              </div>
            </div>
          ))}
          <div>total</div>
          <button type="submit" disabled={cart.items.length === 0}>
            Confirmar Pedido
          </button>
        </CartItemsContainer>
      </div>
    </Container>
  )
}
