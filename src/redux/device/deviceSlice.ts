import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorResponse } from '../../models/axiosModels';
import { AxiosError } from 'axios';
import { IFilter } from '../../models/filterModels';
import { AppDispatch } from '../store';
import DeviceService from '../../http/services/DeviceService';
import { IDevice, IDevicesResponse } from '../../models/deviceModels';

interface DevicesState {
	devices: IDevice[];
	total: number;
	isLoading: boolean;
	error: string | null;
}

const initialState: DevicesState = {
	total: 0,
	devices: [],
	isLoading: false,
	error: null,
};

export const devicesSlice = createSlice({
	name: 'devices',
	initialState,
	reducers: {
		fetchDevices(state) {
			state.isLoading = true;
			state.error = null;
		},
		fetchDevicesSuccess(state, action: PayloadAction<IDevicesResponse>) {
			state.isLoading = false;
			state.devices = action.payload.devices;
			state.total = action.payload.total;
		},
		fetchDevicesError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
		resetDevices(state) {
			// state.devices = [];
			// state.total = 0;
		},
	},
});

export const fetchDevices = (type: string, filter: IFilter) => async (dispatch: AppDispatch) => {
	try {
		dispatch(devicesSlice.actions.fetchDevices());
		const response = await DeviceService.getDevices(type, filter);
		dispatch(devicesSlice.actions.fetchDevicesSuccess(response.data));
	} catch (error) {
		const err = error as AxiosError<ErrorResponse>;
		const message = err.response?.data.message as string;
		dispatch(devicesSlice.actions.fetchDevicesError(message));
	}
};
