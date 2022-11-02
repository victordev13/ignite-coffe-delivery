import { CartItem } from './reducer'

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
}

export interface Action<T = any> {
  type: ActionTypes
  payload?: { data: T }
}

export function addItemToCart(item: CartItem) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      data: item,
    },
  }
}
export function updateItem(item: CartItem) {
  return {
    type: ActionTypes.UPDATE_ITEM,
    payload: {
      data: item,
    },
  }
}

export function removeItemFromCart(item: CartItem) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      data: item,
    },
  }
}
