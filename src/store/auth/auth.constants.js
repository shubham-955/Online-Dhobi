import { getValue } from "../../Utils/LocalStorage"

export const initialState = {
    isUserLoggedIn: getValue("userToken") ? true : false,
    userToken: getValue("userToken"),
    error: false,
    userName: getValue('userName')
}