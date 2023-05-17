import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICartDevice } from '../../models/cartModels';
import { AppDispatch } from '../store';
import CartService from '../../http/services/СartService';
import { notificationSlice } from '../notifications/notificationSlice';
import { purchaseSuccess } from '../../warnings/cartWarnings';
import { fetchCart } from '../cart/cartSlice';

interface PurchaseState {
	devices: ICartDevice[];
	show: boolean;
}

const initialState: PurchaseState = {
	devices: [],
	show: false,
};

export const purchaseSlice = createSlice({
	name: 'purchase',
	initialState,
	reducers: {
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

export const fetchPurchase = (devices: ICartDevice[]) => async (dispatch: AppDispatch) => {
	try {
		await CartService.postPurchase(devices);
		dispatch(purchaseSlice.actions.hidePurchase());
		dispatch(notificationSlice.actions.addNotification(purchaseSuccess));
		dispatch(fetchCart());
	} catch (error) {
		console.log(error);
	}
};
