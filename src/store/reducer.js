import { combineReducers } from 'redux'
import { authReducer } from './auth/auth.reducer'
import { cartItemReducer } from './cartItem/cartItem.reducer'

export default combineReducers({
    cartItem: cartItemReducer,
    auth: authReducer,
});