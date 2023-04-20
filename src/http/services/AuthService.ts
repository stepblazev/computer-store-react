import axios, { AxiosResponse } from 'axios';
import api from '..';
import { IAuth } from '../../models/authModels';

export default class AuthService {
	static async login(email: string, password: string): Promise<AxiosResponse<IAuth>> {
		return axios.post<IAuth>(`/login`, { email, password }, { withCredentials: true });
	}

	static async registration(email: string, password: string): Promise<AxiosResponse<IAuth>> {
		return axios.post<IAuth>(`/registration`, { email, password }, { withCredentials: true });
	}

	static async refresh(): Promise<AxiosResponse<IAuth>> {
		return axios.post<IAuth>(`/refresh`, {}, { withCredentials: true });
	}

	static async logout(): Promise<AxiosResponse<any>> {
		return api.post<any>('/logout');
	}
}
