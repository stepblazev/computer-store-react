import { createSlice } from '@reduxjs/toolkit';

interface UserState {
	isAuth: boolean;
	isLoading: boolean;
	error: string | null;
	email: string | null;
}

const initialState: UserState = {
	isAuth: false,
	isLoading: false,
	error: null,
	email: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	// extraReducers: {}, // FIXME DEPRECATED (builder callback)
});
