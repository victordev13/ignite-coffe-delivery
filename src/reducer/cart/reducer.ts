import produce from 'immer'
import { Action, ActionTypes } from './actions'

export interface CartItem {
  id: string
  count: number
  amount: number
  value: number
}

interface CartState {
  items: CartItem[]
  totalCount: number
  totalValue: number
}

export function cartReducer(state: CartState, action: Action<CartItem>) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM: {
      return produce(state, (draft) => {
        if (action.payload?.data) {
          draft.items.push(action.payload?.data)
          draft.totalCount += action.payload.data.count
          draft.totalValue += action.payload.data.amount
        }
      })
    }

    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      return produce(state, (draft) => {
        if (action.payload?.data) {
          draft.items.filter((item) => item.id !== action.payload?.data.id)
          draft.totalCount -= action.payload.data.count
          draft.totalValue += action.payload.data.amount
        }
      })
    }

    default:
      return state
  }
}
