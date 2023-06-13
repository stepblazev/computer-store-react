import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICartDevice } from '../../models/cartModels';
import { AppDispatch } from '../store';
import CartService from '../../http/services/СartService';
import { notificationSlice } from '../notifications/notificationSlice';
import { purchaseSuccess } from '../../warnings/cartWarnings';
import { fetchCart } from '../cart/cartSlice';
import { AxiosError } from 'axios';
import { ErrorResponse } from '../../models/axiosModels';

interface PurchaseState {
	devices: ICartDevice[];
	show: boolean;
	isLoading: boolean;
	error: string | null;
}

const initialState: PurchaseState = {
	devices: [],
	show: false,
	isLoading: false,
	error: null,
};

export const purchaseSlice = createSlice({
	name: 'purchase',
	initialState,
	reducers: {
		fetchPurchase(state) {
			state.isLoading = true;
			state.error = null;
		},
		fetchPurchaseSuccess(state) {
			state.isLoading = false;
		},
		fetchPurchaseError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
		showPurchase(state, action: PayloadAction<ICartDevice[]>) {
			state.show = true;
			state.devices = action.payload;
		},
		hidePurchase(state) {
			state.show = false;
			state.devices = [];
		},
	},
});

export const fetchPurchase =
	(devices: ICartDevice[], address: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(purchaseSlice.actions.fetchPurchase());
			await CartService.postPurchase(devices, address);
			dispatch(purchaseSlice.actions.hidePurchase());
			dispatch(purchaseSlice.actions.fetchPurchaseSuccess());
			dispatch(notificationSlice.actions.addNotification(purchaseSuccess));
			dispatch(fetchCart());
		} catch (error) {
			const err = error as AxiosError<ErrorResponse>;
			const message = err.response?.data.message as string;
			dispatch(purchaseSlice.actions.fetchPurchaseError(message));
		}
	};
