import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/reducer';
import gamesReducer from './games/reducer';
import listReducer from './list/reducer';
import sortedSlice from './sorted-list/reducer';

const rootReducer = combineReducers({
	cart: cartReducer,
	games: gamesReducer,
	list: listReducer,
	sort: sortedSlice,
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart', 'games'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
});

export const persistor = persistStore(store);
