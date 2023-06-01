import { AxiosResponse } from 'axios';
import api from '..';
import { IRate } from '../../models/deviceModels';

export default class RateService {
	static async getRates(id: number, page: number): Promise<AxiosResponse<IRate[]>> {
		return api.get<IRate[]>(`/device/${id}/rates?_page=${page}`);
	}

	static async getOwnRate(id: number): Promise<AxiosResponse<IRate>> {
		return api.get<IRate>(`/device/${id}/rate`);
	}

	static async postOwnRate(
		id: number,
		rate: number,
		message: string
	): Promise<AxiosResponse<any>> {
		return api.post<any>(`/device/${id}/rate`, {
			rate,
			message,
		});
	}

	static async putOwnRate(
		id: number,
		rate: number,
		message: string
	): Promise<AxiosResponse<any>> {
		return api.put<any>(`/device/${id}/rate`, {
			rate,
			message,
		});
	}

	static async deleteOwnRate(id: number): Promise<AxiosResponse<any>> {
		return api.delete<any>(`/device/${id}/rate`);
	}
}
