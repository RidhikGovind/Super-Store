import React, { createContext, useState } from 'react';

const CartContext = createContext();

const { Provider } = CartContext;

const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [cartTotal, setCartTotal] = useState(1);
	return <Provider value={{ cartTotal }}>{children}</Provider>;
};

export { CartProvider, CartContext };
