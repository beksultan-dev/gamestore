import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	itemsInCart: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, { payload }) => {
			state.itemsInCart.push(payload);
		},
		deleteFromCart: (state, { payload }) => {
			const arr = state.itemsInCart.filter(
				(item) => item.id !== payload
			);
			state.itemsInCart = arr;
		},
	},
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
