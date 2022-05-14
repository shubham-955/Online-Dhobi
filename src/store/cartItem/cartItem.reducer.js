import { CART_ITEMS } from "./cartItem.actionTypes"
import { initialState } from "./cartItem.constants";

export const cartItemReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CART_ITEMS: {
            return {
                ...state, cartItems: payload
            };
        }
        default: {
            return { ...state };
        }
    }
}