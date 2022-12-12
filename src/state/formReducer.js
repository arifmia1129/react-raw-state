import { actionType } from "./actionType";

export const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    education: "",
    feedback: "",
    term: false,
    quantity: 0
};

export const reducer = (state, action) => {
    switch (action.type) {
        case actionType.TEXT:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case actionType.TOGGLE:
            return {
                ...state,
                term: !state.term
            }
        case "INCREMENT":
            return {
                ...state,
                quantity: state.quantity + 1
            }
        case "DECREMENT":
            return {
                ...state,
                quantity: state.quantity - 1
            }
        default: return state
    }
}