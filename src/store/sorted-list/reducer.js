import { createSlice } from '@reduxjs/toolkit';

const sortedListSlice = createSlice({
	name: 'sortedList',
	initialState: {
		sorted: null,
	},
	reducers: {
		setSortByPrice: (state, { payload }) => {
			state.sorted = payload;
		},
	},
});

export const { setSortByPrice } = sortedListSlice.actions;
export default sortedListSlice.reducer;
