import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    ingredients: ''
}

export default function sandwichReducer(state = initialState, action: PayloadAction<string>) {
    switch (action.type) {
        case "sandwich/addIngredient":
            return { ...state, ingredients: `${state.ingredients} ${action.payload}` };
        case "sandwich/clear":
            return initialState;
        default:
            return state;
    }
}