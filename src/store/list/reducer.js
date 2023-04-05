import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://642c4c79208dfe25472cef7e.mockapi.io/data';

export const getAsyncData = createAsyncThunk(
	'list/getAsyncData',
	async (_, { rejectWithValue }) => {
		try {
			const json = await axios.get(URL);
			return json.data;
		} catch (err) {
			return rejectWithValue(err.message);
		}
	}
);

const list = createSlice({
	name: 'list',
	initialState: {
		gamesList: [],
		status: null,
		error: null,
	},
	reducers: {},
	extraReducers: {
		[getAsyncData.pending]: (state, action) => {
			state.error = null;
			state.status = 'pending';
		},
		[getAsyncData.fulfilled]: (state, action) => {
			state.gamesList = action.payload;
			state.status = 'fulfilled';
		},
		[getAsyncData.rejected]: (state, action) => {
			state.error = action.payload;
			state.status = 'rejected';
		},
	},
});

export default list.reducer;
