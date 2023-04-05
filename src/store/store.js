import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/reducer';
import gamesReducer from './games/reducer';
import listReducer from './list/reducer';

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		games: gamesReducer,
		list: listReducer,
	},
});
