import { AxiosResponse } from 'axios';
import api from '..';
import { ICartDevice } from '../../models/cartModels';

export default class CartService {
	static async getCart(): Promise<AxiosResponse<ICartDevice[]>> {
		return api.get<ICartDevice[]>(`/cart`);
	}
	static async postDevice(deviceId: number): Promise<AxiosResponse<any>> {
		return api.post<any>(`/cart/${deviceId}`);
	}
	static async deleteDevice(deviceId: number): Promise<AxiosResponse<any>> {
		return api.delete<any>(`/cart/${deviceId}`);
	}
}
