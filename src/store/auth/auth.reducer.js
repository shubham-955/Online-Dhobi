import { GET_USER_NAME, USER_LOGIN_ERROR, USER_LOGIN_SUCCESS, USER_LOGOUT } from "./auth.actionTypes";
import { updateValue } from "../../Utils/LocalStorage"
import { initialState } from "./auth.constants";

export const authReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case USER_LOGIN_SUCCESS: {
            updateValue("userToken", payload.authToken)
            return {
                ...state.auth,
                isUserLoggedIn: true,
                error: false,
                ...payload
            }
        }
        case USER_LOGIN_ERROR: {
            updateValue("userToken", payload.userToken)
            return {
                ...state.auth,
                isUserLoggedIn: false,
                error: true
            }
        }
        case USER_LOGOUT: {
            updateValue("userToken", "")
            updateValue("userName", "")
            return {
                ...state.auth,
                isUserLoggedIn: false,
                userToken: "",
            }
        }
        case GET_USER_NAME: {
            updateValue("userName", payload)
            return {
                ...state.auth,
                isUserLoggedIn: true,
                error: false,
                userName: payload,
            }
        }
        default: {
            return { ...state };
        }
    }
}