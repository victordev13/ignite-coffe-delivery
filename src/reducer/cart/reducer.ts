import produce from 'immer'
import { ICoffee } from '../../pages/Home'
import { Action, ActionTypes } from './actions'

export interface CartItem {
  id: string
  count: number
  totalValue: number
  coffee: ICoffee
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
          draft.items.push({
            ...action.payload?.data,
            totalValue:
              action.payload?.data.coffee.price * action.payload?.data.count,
          })

          draft.totalCount += action.payload.data.count
          draft.totalValue += action.payload.data.coffee.price
        }
      })
    }

    case ActionTypes.UPDATE_ITEM: {
      return produce(state, (draft) => {
        draft.items.forEach((item) => {
          if (item.id === action.payload?.data.id) {
            item.count = action.payload?.data.count
            item.totalValue = action.payload?.data.count * item.coffee.price
          }

          draft.totalCount = draft.items.reduce(
            (acc, item) => acc + item.count,
            0,
          )
          draft.totalValue = draft.items.reduce(
            (acc, item) => acc + item.totalValue,
            0,
          )
        })
      })
    }

    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      return produce(state, (draft) => {
        draft.items = draft.items.filter(
          (item) => item.id !== action.payload?.data.id,
        )
        draft.totalCount -= action.payload?.data?.count || 0
        draft.totalValue -= action.payload?.data?.totalValue || 0
      })
    }

    default:
      return state
  }
}
