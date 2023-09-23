import { createContext, useContext } from "react"

// my initial State when a user visit the first time mywebsite
const initialState = {
    cartlist: [],
    total: 0
}
// create a context 
const CartContext = createContext(initialState)

// create a provider where we can access our Global state
export const CartProvider = ({children}) => {
    const value = {
        total: 50
    }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

// I need to wrap my application myApp will be as a Child to the provider

// function that give the power to access all the values
export const useCart = () => {
    const context = useContext(CartContext)
    return context
}