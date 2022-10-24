import { createContext, ReactNode, useReducer } from 'react'
import { addItemToCart } from '../reducer/cart/actions'
import { CartItem, cartReducer } from '../reducer/cart/reducer'

interface CartContextInterface {
  cart: {
    items: CartItem[]
    totalCount: number
    totalValue: number
  }
  handleAddItemToCart: (item: CartItem) => void
}

export const CartContext = createContext({} as CartContextInterface)

interface Props {
  children: ReactNode
}

export function CartContextProvider({ children }: Props) {
  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
    totalCount: 0,
    totalValue: 0,
  })

  function handleAddItemToCart(item: CartItem) {
    dispatch(addItemToCart(item))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
