import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorResponse } from '../../models/axiosModels';
import { AxiosError } from 'axios';
import { IFilter, OrderTypes } from '../../models/filterModels';
import { AppDispatch } from '../store';
import DeviceService from '../../http/services/DeviceService';
import { IDevice, IDevicesResponse } from '../../models/deviceModels';

interface DevicesState {
	total: number;
	devices: IDevice[];
	page: number;
	order: OrderTypes;
	isLoading: boolean;
	error: string | null;
}

const initialState: DevicesState = {
	total: 0,
	devices: [],
	page: 1,
	order: OrderTypes.QUANTITY,
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
		setPage(state, action: PayloadAction<number>) {
			state.page = action.payload;
		},
		setOrder(state, action: PayloadAction<OrderTypes>) {
			state.order = action.payload;
		},
		resetDevices(state) {
			state.total = 0;
			state.devices = [];
			state.page = 1;
			state.order = OrderTypes.QUANTITY;
		},
	},
});

export const fetchDevices =
	(type: string, filter: IFilter, order: OrderTypes, page: number) =>
	async (dispatch: AppDispatch) => {
		try {
			dispatch(devicesSlice.actions.fetchDevices());
			const response = await DeviceService.getDevices(type, filter, order, page);
			dispatch(devicesSlice.actions.fetchDevicesSuccess(response.data));
		} catch (error) {
			const err = error as AxiosError<ErrorResponse>;
			const message = err.response?.data.message as string;
			dispatch(devicesSlice.actions.fetchDevicesError(message));
		}
	};
