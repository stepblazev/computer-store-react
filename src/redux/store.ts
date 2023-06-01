import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { notificationSlice } from './notifications/notificationSlice';
import { searchSlice } from './search/searchSlice';
import { authSlice } from './auth/authSlice';
import { filterSlice } from './filter/filterSlice';
import { devicesSlice } from './device/deviceSlice';
import { cartSlice } from './cart/cartSlice';
import { purchaseSlice } from './purchase/purchaseSlice';
import { accountSlice } from './account/accountSlice';
import { rateSlice } from './rate/rateSlice';

const rootReducer = combineReducers({
	auth: authSlice.reducer,
	notifications: notificationSlice.reducer,
	search: searchSlice.reducer,
	filter: filterSlice.reducer,
	devices: devicesSlice.reducer,
	cart: cartSlice.reducer,
	purchase: purchaseSlice.reducer,
	account: accountSlice.reducer,
	rate: rateSlice.reducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
