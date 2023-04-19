import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FetchAuthTypes, IAuth } from '../../models/authModels';
import { AppDispatch } from '../store';
import api from '../../http';

interface AuthState {
	isAuth: boolean;
	isLoading: boolean;
	error: string | null;
	email: string | null;
}

const initialState: AuthState = {
	isAuth: false,
	isLoading: false,
	error: null,
	email: null,
};

export const authSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		fetchUser(state) {
			state.isLoading = true;
		},
		fetchSuccessUser(state, action: PayloadAction<IAuth>) {
			const { email, accessToken } = action.payload;
			localStorage.setItem('token', accessToken);
			state.isLoading = false;
			state.isAuth = true;
			state.email = email;
		},
		fetchErrorUser(state, action: PayloadAction<string>) {
			state.error = action.payload;
			state.isLoading = false;
			state.isAuth = false;
			state.email = null;
		},
	},
});

export const fetchUser =
	(email: string, password: string, type: FetchAuthTypes) =>
	async (dispatch: AppDispatch) => {
		try {
			dispatch(authSlice.actions.fetchUser());
			const response = await api.post<IAuth>(type, { email, password });
			dispatch(authSlice.actions.fetchSuccessUser(response.data));
		} catch (error: any) {
			dispatch(authSlice.actions.fetchErrorUser(error.message));
		}
	};
