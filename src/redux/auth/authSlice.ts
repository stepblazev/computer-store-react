import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FetchAuthTypes, IAuth } from '../../models/authModels';
import { AppDispatch } from '../store';
import AuthService from '../../http/services/AuthService';
import { AxiosError } from 'axios';
import { ErrorResponse } from '../../models/axiosModels';
import { notificationSlice } from '../notifications/notificationSlice';
import { loginSuccess, logoutWarning } from '../../warnings/authWarnings';

interface AuthState {
	email: string | null;
	isAuth: boolean;
	isLoading: boolean;
	error: string;
}

const initialState: AuthState = {
	isAuth: Boolean(localStorage.getItem('token')),
	isLoading: false,
	error: '',
	email: null,
};

export const authSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		fetchUser(state) {
			state.isLoading = true;
			state.error = '';
		},
		fetchUserSuccess(state, action: PayloadAction<IAuth>) {
			state.isLoading = false;
			const { email, accessToken } = action.payload;
			localStorage.setItem('token', accessToken);
			state.isAuth = true;
			state.email = email;
		},
		fetchUserError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
			state.isAuth = false;
			state.email = null;
		},
		logoutUser(state) {
			state.isAuth = false;
			state.isLoading = false;
			state.error = '';
			state.email = null;
		},
	},
});

const fetchType = {
	[FetchAuthTypes.LOGIN]: AuthService.login,
	[FetchAuthTypes.REGISTRATION]: AuthService.registration,
};

export const fetchUser =
	(email: string, password: string, type: FetchAuthTypes) => async (dispatch: AppDispatch) => {
		try {
			dispatch(authSlice.actions.fetchUser());
			const response = await fetchType[type](email, password);
			dispatch(authSlice.actions.fetchUserSuccess(response.data));
			dispatch(notificationSlice.actions.addNotification(loginSuccess));
		} catch (error) {
			const err = error as AxiosError<ErrorResponse>;
			const message = err.response?.data.message as string;
			dispatch(authSlice.actions.fetchUserError(message));
		}
	};

export const refreshUser = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(authSlice.actions.fetchUser());
		const response = await AuthService.refresh();
		dispatch(authSlice.actions.fetchUserSuccess(response.data));
	} catch (error) {
		localStorage.removeItem('token');
		const err = error as AxiosError<ErrorResponse>;
		const message = err.response?.data.message as string;
		dispatch(authSlice.actions.fetchUserError(message));
	}
};

export const logoutUser = () => async (dispatch: AppDispatch) => {
	await AuthService.logout();
	localStorage.removeItem('token');
	dispatch(authSlice.actions.logoutUser());
	dispatch(notificationSlice.actions.addNotification(logoutWarning));
};
