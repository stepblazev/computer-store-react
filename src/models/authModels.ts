export interface IAuth {
	email: string;
	accessToken: string;
}

export enum FetchAuthTypes {
	LOGIN = '/login',
	REGISTRATION = '/registration',
}
