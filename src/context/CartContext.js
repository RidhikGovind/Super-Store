import React, { createContext, useReducer } from 'react';
import { sumItems, CartReducer } from './CartReducer';

export const CartContext = createContext();

//getting the storage item from localStorage, if empty then create an empty array
const storage = localStorage.getItem('cart')
	? JSON.parse(localStorage.getItem('cart'))
	: [];

//creating an initialState consisting of storage, quantities etc.
const initialState = { cartItems: storage, ...sumItems(storage) };

const CartContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(CartReducer, initialState);

	//here the payload is the 'singleProduct's JSON data passed from Item.js
	const addProduct = (payload) => {
		dispatch({ type: 'ADD_ITEM', payload });
	};

	const increase = (payload) => {
		dispatch({ type: 'INCREASE', payload });
	};
	const decrease = (payload) => {
		dispatch({ type: 'DECREASE', payload });
	};

	const contextValues = {
		addProduct,
		increase,
		decrease,
		...state,
	};

	return (
		<CartContext.Provider value={contextValues}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
