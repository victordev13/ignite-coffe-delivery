import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { ChangeEvent, FormEvent, MouseEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import IconButton from '../../components/IconButton'
import { InputCounter } from '../../components/InputCounter'
import { TextInput } from '../../components/TextInput'
import { CartContext } from '../../contexts/CartContext'
import { OrderContext } from '../../contexts/OrderContext'
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
  PaymentOption,
  ResumeContainer,
} from './styles'

const paymentOptions = {
  creditCard: 'credit-cart',
  debitCard: 'debit-card',
  money: 'money',
}
export type PaymentOptions = keyof typeof paymentOptions

interface Address {
  cep: string
  rua: string
  numero: string
  bairro: string
  cidade: string
  uf: string
  complemento: string
}

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

  const [selectedPaymentOption, setSelectedPaymentOption] =
    useState<PaymentOptions | null>(null)

  const [address, setAddress] = useState<Address>({} as Address)

  const { handleCreateOrder } = useContext(OrderContext)
  const navigate = useNavigate()

  const handleChangePaymentOption = (event: MouseEvent<HTMLButtonElement>) =>
    setSelectedPaymentOption(event.target.value as PaymentOptions)

  const handleChangeCep = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress((state) => {
      return { ...state, cep: event.target.value }
    })
  }

  const handleChangeRua = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress((state) => {
      return { ...state, cep: event.target.value }
    })
  }

  const handleChangeNumero = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress((state) => {
      return { ...state, numero: event.target.value }
    })
  }

  const handleChangeBairro = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress((state) => {
      return { ...state, bairro: event.target.value }
    })
  }

  const handleChangeCidade = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress((state) => {
      return { ...state, cidade: event.target.value }
    })
  }

  const handleChangeUF = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress((state) => {
      return { ...state, uf: event.target.value }
    })
  }

  const handleChangeComplemento = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress((state) => {
      return { ...state, complemento: event.target.value }
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (selectedPaymentOption === null) {
      alert('Selecione um método de Pagamento')
      return
    }

    handleCreateOrder({
      items: cart.items,
      address,
      paymentMethod: selectedPaymentOption,
    })

    navigate('/success')
  }

  return (
    <Container onSubmit={handleSubmit}>
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
              <TextInput
                required
                placeholder="CEP"
                style={{ width: 'auto' }}
                onChange={handleChangeCep}
              />
            </FormGroup>
            <FormGroup>
              <TextInput
                required
                placeholder="Rua"
                onChange={handleChangeRua}
              />
            </FormGroup>
            <FormGroup>
              <TextInput
                required
                placeholder="Número"
                onChange={handleChangeNumero}
              />
              <TextInput
                required
                placeholder="Complemento"
                onChange={handleChangeComplemento}
              />
            </FormGroup>
            <FormGroup>
              <TextInput
                required
                placeholder="Bairro"
                onChange={handleChangeBairro}
              />
              <TextInput
                required
                placeholder="Cidade"
                onChange={handleChangeCidade}
              />
              <TextInput required placeholder="UF" onChange={handleChangeUF} />
            </FormGroup>
          </FormContainer>
        </AddressContainer>
        <PaymentContainer>
          <header>
            <CurrencyDollar size={20} color={defaultTheme.colors.purple} />
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </header>
          <div>
            <PaymentOption
              type="button"
              selected={selectedPaymentOption === paymentOptions.creditCard}
              value={paymentOptions.creditCard}
              onClick={handleChangePaymentOption}
            >
              <CreditCard />
              Cartão de Crédito
            </PaymentOption>
            <PaymentOption
              type="button"
              selected={selectedPaymentOption === paymentOptions.debitCard}
              value={paymentOptions.debitCard}
              onClick={handleChangePaymentOption}
            >
              <Bank />
              Cartão de Débito
            </PaymentOption>
            <PaymentOption
              type="button"
              selected={selectedPaymentOption === paymentOptions.money}
              value={paymentOptions.money}
              onClick={handleChangePaymentOption}
            >
              <Money />
              Dinheiro
            </PaymentOption>
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
                  <span className="absolute">
                    R$ {formatMoney(item.totalValue)}
                  </span>
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
          <ResumeContainer>
            <div>
              <span>Total de Itens</span>
              <span>R$ {cart.totalCount}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,00</span>
            </div>
            <div className="bold">
              <span style={{ fontSize: '1.3rem' }}>Total</span>
              <span style={{ fontSize: '1.3rem' }}>
                R$ {formatMoney(cart.totalValue)}
              </span>
            </div>
          </ResumeContainer>
          <button type="submit" disabled={cart.items.length === 0}>
            Confirmar Pedido
          </button>
        </CartItemsContainer>
      </div>
    </Container>
  )
}
