import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { notificationSlice } from './notifications/notificationSlice';
import { searchSlice } from './search/searchSlice';
import { authSlice } from './auth/authSlice';

const rootReducer = combineReducers({
	auth: authSlice.reducer,
	notifications: notificationSlice.reducer,
	search: searchSlice.reducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
