import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";


export const useProductsContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error(
            "useProductContext must be used within a ProductContextProvider"
        );
    }
    return context;
}
