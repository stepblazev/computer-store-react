import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ErrorResponse } from '../../models/axiosModels';
import { AppDispatch } from '../store';
import { ISearch } from '../../models/deviceModels';
import DeviceService from '../../http/services/DeviceService';

interface SearchState extends ISearch {
	isLoading: boolean;
	error: string | null;
}

const initialState: SearchState = {
	types: [],
	devices: [],
	isLoading: false,
	error: null,
};

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		fetchSearch(state) {
			state.isLoading = true;
			state.types = [];
			state.devices = [];
			state.error = null;
		},
		fetchSearchSuccess(state, action: PayloadAction<ISearch>) {
			state.isLoading = false;
			state.types = action.payload.types;
			state.devices = action.payload.devices;
		},
		fetchSearchError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const fetchSearch = (search: string) => async (dispatch: AppDispatch) => {
	try {
		dispatch(searchSlice.actions.fetchSearch());
		const response = await DeviceService.search(search);
		dispatch(searchSlice.actions.fetchSearchSuccess(response.data));
	} catch (error) {
		const err = error as AxiosError<ErrorResponse>;
		const message = err.response?.data.message as string;
		dispatch(searchSlice.actions.fetchSearchError(message));
	}
};
