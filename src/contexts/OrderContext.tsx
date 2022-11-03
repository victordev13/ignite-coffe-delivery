import { createContext, ReactNode, useEffect, useState } from 'react'
import { PaymentOptions } from '../pages/Cart'
import { CartItem } from '../reducer/cart/reducer'

interface Address {
  cep: string
  rua: string
  numero: string
  bairro: string
  cidade: string
  uf: string
  complemento: string
}

interface Order {
  id: string
  items: CartItem[]
  address: Address
  paymentMethod: PaymentOptions
}

interface CreateOrder {
  items: CartItem[]
  address: Address
  paymentMethod: PaymentOptions
}

interface OrderContextInterface {
  order: Order | null
  handleCreateOrder: (order: CreateOrder) => void
}

export const OrderContext = createContext({
  cart: {
    items: [],
    totalCount: 0,
    totalValue: 0,
  },
} as unknown as OrderContextInterface)

interface Props {
  children: ReactNode
}

export function OrderContextProvider({ children }: Props) {
  const [order, setOrder] = useState<Order | null>(null)

  const handleCreateOrder = (order: CreateOrder) => {
    setOrder({ ...order, id: new Date().toTimeString() + Math.random() })
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        handleCreateOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
