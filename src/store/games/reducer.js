import { createSlice } from '@reduxjs/toolkit';

const gamesSlice = createSlice({
	name: 'games',
	initialState: { currentGame: null },
	reducers: {
		setCurrentGame: (state, { payload }) => {
			state.currentGame = payload;
		},
	},
});

export const { setCurrentGame } = gamesSlice.actions;
export default gamesSlice.reducer;
