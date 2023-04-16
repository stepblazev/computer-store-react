export interface IAuth {
	email: string;
	accessToken: string;
}

export interface IAuthData {
	email: string;
	password: string;
}

export enum FetchAuthTypes {
	LOGIN = '/login',
	REGISTRATION = '/registration',
}
