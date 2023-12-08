import { createContext, useReducer } from "react";

export const ProductContext = createContext();

export const productReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCTS':
            return {
                data: action.payload
            }
        case 'GET_SUBCATEGORY_PRODUCTS':
            return {
                data: action.payload
            }
        default:
            return state;    
    }
}

export const ProductContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, {data: null});

    return (
        <ProductContext.Provider value={{...state, dispatch}}>
            {children}
        </ProductContext.Provider>
    );
    }