import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../reducer/cartReducer"
// my initial State when a user visit the first time mywebsite
const initialState = {
    cartList: [],
    total: 0
}
// create a context 
const CartContext = createContext(initialState)

// create a provider where we can access our Global state
export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)
    // dispatch the function that can be applied on state 
    // dispatch the power to call the functions from reducer

    const addToCart = (product) => {
        const updatedCartList = state.cartList.concat(product)
        updateTotal(updatedCartList)
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCartList
            } 
        })
    }

    const removeFromCart = (product) => {
        const updatedCartList = state.cartList.filter(current => current.id !== product.id)
        updateTotal(updatedCartList)
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCartList
            }

        })
    }
    const updateTotal = (products) => {
        let total = 0
        products.forEach(product => total = total + product.price)
        dispatch({
            type: "UPDATE_TOTAL",
            payload: {
                total: total
            }
        })

    }
    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart
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