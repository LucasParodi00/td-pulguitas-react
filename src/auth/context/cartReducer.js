import { types } from "../types/types"


export const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case types.addCart:
            return{
                ...state,
                cart: [...state.cart, action.payload]
            }
        case types.removeCart:
            return {
                ...state,
                cart: state.cart.filter(item => item.id_producto !== action.payload)
            }
      
        default:
            return state;
    }
}