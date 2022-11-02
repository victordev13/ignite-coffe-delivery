import { createContext, ReactNode, useReducer } from 'react'
import {
  addItemToCart,
  removeItemFromCart,
  updateItem,
} from '../reducer/cart/actions'
import { CartItem, cartReducer } from '../reducer/cart/reducer'

interface CartContextInterface {
  cart: {
    items: CartItem[]
    totalCount: number
    totalValue: number
  }
  handleAddItemToCart: (item: Omit<CartItem, 'totalValue'>) => void
  handleRemoveItemFromCart: (item: CartItem) => void
  handleIncrementItemCount: (item: CartItem) => void
  handleDecrementItemCount: (item: CartItem) => void
}

export const CartContext = createContext({
  cart: {
    items: [],
    totalCount: 0,
    totalValue: 0,
  },
} as unknown as CartContextInterface)

interface Props {
  children: ReactNode
}

export function CartContextProvider({ children }: Props) {
  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
    totalCount: 0,
    totalValue: 0,
  })

  function handleAddItemToCart(item: Omit<CartItem, 'totalValue'>) {
    dispatch(addItemToCart({ ...item, totalValue: 0 }))
  }

  function handleRemoveItemFromCart(item: CartItem) {
    dispatch(removeItemFromCart(item))
  }

  function handleIncrementItemCount(item: CartItem) {
    dispatch(
      updateItem({
        ...item,
        count: item.count + 1,
      }),
    )
  }

  function handleDecrementItemCount(item: CartItem) {
    dispatch(
      updateItem({
        ...item,
        count: item.count - 1,
      }),
    )
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddItemToCart,
        handleIncrementItemCount,
        handleDecrementItemCount,
        handleRemoveItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
