import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { notificationSlice } from './notice/notificationSlice';
import { userSlice } from './user/userSlice';

const rootReducer = combineReducers({
	user: userSlice.reducer,
	notifications: notificationSlice.reducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
