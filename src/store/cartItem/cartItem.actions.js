import { CART_ITEMS } from "./cartItem.actionTypes";

export const cartItem = (value) => ({
    type: CART_ITEMS,
    payload: value,
})
