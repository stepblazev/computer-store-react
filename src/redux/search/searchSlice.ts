import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ErrorResponse } from '../../models/axiosModels';
import { AppDispatch } from '../store';
import DeviceService from '../../http/services/DeviceService';
import { IDevice } from '../../models/deviceModels';

interface SearchState {
	types: string[];
	devices: IDevice[];
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
		fetchSearchSuccess(state, action: PayloadAction<IDevice[]>) {
			state.isLoading = false;
			state.devices = action.payload;
			const types = action.payload.map((device) => device.type);
			const uniqueTypes = [...new Set(types)];
			state.types = uniqueTypes;
		},
		fetchSearchError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
		searchClear(state) {
			state.types = [];
			state.devices = [];
			state.isLoading = false;
			state.error = null;
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
