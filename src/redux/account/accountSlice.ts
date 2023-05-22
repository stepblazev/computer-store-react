import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ErrorResponse } from '../../models/axiosModels';
import { IAccountResponse } from '../../models/accountModels';
import { AppDispatch } from '../store';
import AccountService from '../../http/services/AccountService';

interface AccountState {
	id: number | null;
	email: string | null;
	name: string | null;
	address: string | null;
	isLoading: boolean;
	error: string | null;
	showSave: boolean;
}

const initialState: AccountState = {
	id: null,
	email: null,
	name: null,
	address: null,
	isLoading: false,
	error: null,
	showSave: false,
};

export const accountSlice = createSlice({
	name: 'account',
	initialState,
	reducers: {
		fetchAccount(state) {
			state.showSave = false;
			state.isLoading = true;
			state.error = null;
		},
		fetchAccountSuccess(state, action: PayloadAction<IAccountResponse>) {
			state.isLoading = false;
			const { id, email, name, address } = action.payload;
			state.id = id;
			state.email = email;
			state.name = name;
			state.address = address;
		},
		fetchAccountError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
		setName(state, action: PayloadAction<string>) {
			state.name = action.payload;
			state.showSave = true;
		},
		setAddress(state, action: PayloadAction<string>) {
			state.address = action.payload;
			state.showSave = true;
		},
	},
});

export const fetchAccount = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(accountSlice.actions.fetchAccount());
		const response = await AccountService.getProfile();
		dispatch(accountSlice.actions.fetchAccountSuccess(response.data));
	} catch (error) {
		const err = error as AxiosError<ErrorResponse>;
		const message = err.response?.data.message as string;
		dispatch(accountSlice.actions.fetchAccountError(message));
	}
};

export const fetchNewData = (name: string, address: string) => async (dispatch: AppDispatch) => {
	try {
		await AccountService.postData(name, address);
		dispatch(fetchAccount());
	} catch (error) {
		const err = error as AxiosError<ErrorResponse>;
		const message = err.response?.data.message as string;
		dispatch(accountSlice.actions.fetchAccountError(message));
	}
};
