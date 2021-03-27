const Storage = (cartItems) => {
	localStorage.setItem(
		'cart',
		JSON.stringify(cartItems.length > 0 ? cartItems : [])
	);
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
	return { total, itemCount };
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

			return {
				...state,
				cartItems: [...state.cartItems],
				...sumItems(state.cartItems),
			};
		case 'INCREASE':
			if (action.payload.quantity < action.payload.stockCount) {
				state.cartItems[
					state.cartItems.findIndex(
						(product) => product._id === action.payload._id
					)
				].quantity++;
			}

			return {
				...state,
				cartItems: [...state.cartItems],
				...sumItems(state.cartItems),
			};
		case 'DECREASE':
			if (action.payload.quantity !== 1) {
				state.cartItems[
					state.cartItems.findIndex(
						(product) => product._id === action.payload._id
					)
				].quantity--;
			}

			return {
				...state,
				cartItems: [...state.cartItems],
				...sumItems(state.cartItems),
			};

		case 'CHECKOUT':
			return {
				cartItems: [],
				...sumItems([]),
			};

		case 'REMOVE':
			return {
				...state,
				cartItems: [
					...state.cartItems.filter((item) => item._id !== action.payload._id),
				],
				...sumItems(
					state.cartItems.filter((item) => item._id !== action.payload._id)
				),
			};

		default:
			return state;
	}
};

// extra code: *********

// if (
// 	state.cartItems.map((item) => {
// 		if (item._id === action.payload._id) {
// 			console.log(item.quantity)
// 			item.quantity = item.quantity - 1
// 			console.log(item.quantity)
// 		}
// 	})
// )
