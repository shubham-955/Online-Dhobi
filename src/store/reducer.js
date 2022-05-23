import { combineReducers } from 'redux'
import { authReducer } from './auth/auth.reducer'
import { cartItemReducer } from './cartItem/cartItem.reducer'
import { loadReducer } from './load/load.reducer';

export default combineReducers({
    cartItem: cartItemReducer,
    auth: authReducer,
    load: loadReducer
});