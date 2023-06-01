import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRate } from '../../models/deviceModels';
import { AppDispatch } from '../store';
import { AxiosError } from 'axios';
import { ErrorResponse } from '../../models/axiosModels';
import RateService from '../../http/services/RateService';
import { notificationSlice } from '../notifications/notificationSlice';
import { deleteRateWarning, postRateWarning, updateRateWarning } from '../../warnings/rateWarnings';

interface RateState {
	rate: number | null;
	message: string;
	isLoading: boolean;
	error: string | null;
	showSave: boolean;
	exists: boolean;
}

const initialState: RateState = {
	rate: null,
	message: '',
	isLoading: false,
	error: null,
	showSave: false,
	exists: false,
};

export const rateSlice = createSlice({
	name: 'rate',
	initialState,
	reducers: {
		fetchRate(state) {
			state.isLoading = true;
			state.error = null;
			state.showSave = false;
		},
		fetchRateSuccess(state, action: PayloadAction<IRate>) {
			state.isLoading = false;
			if (action.payload?.rate) {
				state.exists = true;
				state.rate = action.payload.rate;
				state.message = action.payload.message;
			} else {
				state.exists = false;
				state.rate = null;
				state.message = '';
			}
		},
		fetchRateError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
		setRate(state, action: PayloadAction<number>) {
			state.rate = action.payload;
			if (state.message.length > 0) state.showSave = true;
		},
		setMessage(state, action: PayloadAction<string>) {
			state.message = action.payload;
			if (state.rate && state.message.length > 0) state.showSave = true;
			else {
				state.showSave = false;
			}
		},
	},
});

export const fetchRate = (id: number) => async (dispatch: AppDispatch) => {
	try {
		dispatch(rateSlice.actions.fetchRate());
		const response = await RateService.getOwnRate(id);
		dispatch(rateSlice.actions.fetchRateSuccess(response.data));
	} catch (error) {
		const err = error as AxiosError<ErrorResponse>;
		const message = err.response?.data.message as string;
		dispatch(rateSlice.actions.fetchRateError(message));
	}
};

export const postRate =
	(id: number, rate: number, message: string) => async (dispatch: AppDispatch) => {
		try {
			await RateService.postOwnRate(id, rate, message);
			dispatch(fetchRate(id));
			dispatch(notificationSlice.actions.addNotification(postRateWarning));
		} catch (error) {
			const err = error as AxiosError<ErrorResponse>;
			const message = err.response?.data.message as string;
			dispatch(rateSlice.actions.fetchRateError(message));
		}
	};

export const updateRate =
	(id: number, rate: number, message: string) => async (dispatch: AppDispatch) => {
		try {
			await RateService.putOwnRate(id, rate, message);
			dispatch(fetchRate(id));
			dispatch(notificationSlice.actions.addNotification(updateRateWarning));
		} catch (error) {
			const err = error as AxiosError<ErrorResponse>;
			const message = err.response?.data.message as string;
			dispatch(rateSlice.actions.fetchRateError(message));
		}
	};

export const deleteRate = (id: number) => async (dispatch: AppDispatch) => {
	try {
		await RateService.deleteOwnRate(id);
		dispatch(fetchRate(id));
		dispatch(notificationSlice.actions.addNotification(deleteRateWarning));
	} catch (error) {
		const err = error as AxiosError<ErrorResponse>;
		const message = err.response?.data.message as string;
		dispatch(rateSlice.actions.fetchRateError(message));
	}
};
