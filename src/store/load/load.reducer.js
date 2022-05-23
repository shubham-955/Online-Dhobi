
import { LOADING_OFF, LOADING_ON } from "./load.actionTypes";
import { initialState } from "./load.constants";

export const loadReducer = (state = initialState, { type }) => {

    switch (type) {
        case LOADING_ON: {
            return {
                ...state,
                loading: true,
            }
        }
        case LOADING_OFF: {
            return {
                ...state,
                loading: false,
            }
        }
        default: {
            return { ...state };
        }
    }
}