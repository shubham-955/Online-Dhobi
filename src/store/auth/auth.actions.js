import { GET_USER_NAME, USER_LOGIN_ERROR, USER_LOGIN_SUCCESS, USER_LOGOUT } from "./auth.actionTypes";

export const loginSuccess = (payload) => ({
    type: USER_LOGIN_SUCCESS,
    payload
})
export const loginError = (error) => ({
    type: USER_LOGIN_ERROR,
    payload: error
})

export const logout = () => ({
    type: USER_LOGOUT,
})

export const getUserName = (payload) => ({
    type: GET_USER_NAME,
    payload
})