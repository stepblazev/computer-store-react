import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { AppDispatch } from '../store';
import { ErrorResponse } from '../../models/axiosModels';
import { ICartDevice, ISetPage } from '../../models/cartModels';
import CartService from '../../http/services/СartService';
import { notificationSlice } from '../notifications/notificationSlice';
import { cartAddSuccess, cartRemoveSuccess } from '../../warnings/cartWarnings';

interface CartState {
	devices: ICartDevice[];
	isLoading: boolean;
	error: string | null;
}

const initialState: CartState = {
	devices: [],
	isLoading: false,
	error: null,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		fetchCart(state) {
			state.isLoading = true;
			state.error = null;
		},
		fetchCartSuccess(state, action: PayloadAction<ICartDevice[]>) {
			state.isLoading = false;
			state.devices = action.payload;
		},
		fetchCartError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
		resetCart(state) {
			state.devices = [];
			state.error = null;
		},
		setAmount(state, action: PayloadAction<ISetPage>) {
			state.devices.find((device) => device.id === action.payload.id)!.amount =
				action.payload.amount;
		},
	},
});

export const fetchCart = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(cartSlice.actions.fetchCart());
		const response = await CartService.getCart();
		dispatch(cartSlice.actions.fetchCartSuccess(response.data));
	} catch (error) {
		const err = error as AxiosError<ErrorResponse>;
		const message = err.response?.data.message as string;
		dispatch(cartSlice.actions.fetchCartError(message));
	}
};

export const addToCart = (deviceId: number) => async (dispatch: AppDispatch) => {
	try {
		await CartService.postDevice(deviceId, 1);
		dispatch(fetchCart());
		dispatch(notificationSlice.actions.addNotification(cartAddSuccess));
	} catch (error) {
		console.log(error);
	}
};

export const removeFromCart = (deviceId: number) => async (dispatch: AppDispatch) => {
	try {
		await CartService.deleteDevice(deviceId);
		dispatch(fetchCart());
		dispatch(notificationSlice.actions.addNotification(cartRemoveSuccess));
	} catch (error) {
		console.log(error);
	}
};
