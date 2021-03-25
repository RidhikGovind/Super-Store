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

			return {
				...state,
				cartItems: [...state.cartItems],
				...sumItems(state.cartItems),
			};
		case 'INCREASE':
			state.cartItems[state.cartItems.findIndex((product) => product._id === action.payload._id)].quantity++;
			return {
				...state,
				cartItems: [...state.cartItems],
				...sumItems(state.cartItems),
			};
		case 'DECREASE':
			
			console.log(action.payload.quantity)
				console.log(state.cartItems[state.cartItems.findIndex(product => product._id === action.payload._id)].quantity--)
				// state.cartItems[state.cartItems.findIndex(product => product._id === action.payload._id)].quantity--

				return {
					...state,
					cartItems: [...state.cartItems],
					...sumItems(state.cartItems),
				};

		case 'CHECKOUT': 
				
				return{
					cartItems: [],
					...sumItems([]),
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