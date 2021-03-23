const Storage = (cartItems) => {
	localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems : []));
};

export const sumItems = (cartItems) => {
	Storage(cartItems);
	let itemCount = cartItems.reduce(
		(total, product) => total + product.quantity,
		0
	);
	let total = cartItems
		.reduce((total, product) => total + product.price * product.quantity, 0)
		.toFixed(2);
	return { itemCount, total };
};

export const CartReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			if (!state.cartItems.find((item) => item._id === action.payload._id)) {
				console.log(state.cartItems);
				state.cartItems.push({
					...action.payload,
					quantity: 1,
				});
			}

			return{
				...state,
				cartItems: [...state.cartItems],
				...sumItems(state.cartItems)
			}
		default:
			return state;
	}
};
