import { LOADING_OFF, LOADING_ON } from "./load.actionTypes";

export const startLoad = () => ({
    type: LOADING_ON,
})

export const stopLoad = () => ({
    type: LOADING_OFF,
})

