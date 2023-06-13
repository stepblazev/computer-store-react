import { AxiosResponse } from 'axios';
import api from '..';
import { ICartDevice } from '../../models/cartModels';

export default class CartService {
	static async getCart(): Promise<AxiosResponse<ICartDevice[]>> {
		return api.get<ICartDevice[]>(`/cart`);
	}

	static async postDevice(deviceId: number, amount: number): Promise<AxiosResponse<any>> {
		return api.post<any>(`/cart`, {
			deviceId,
			amount,
		});
	}

	static async putAmount(deviceId: number, amount: number): Promise<AxiosResponse<any>> {
		return api.put<any>(`/cart`, {
			deviceId,
			amount,
		});
	}

	static async deleteDevice(deviceId: number): Promise<AxiosResponse<any>> {
		return api.delete<any>(`/cart/${deviceId}`);
	}

	static async postPurchase(
		devices: ICartDevice[],
		address: string
	): Promise<AxiosResponse<any>> {
		return api.post<any>(`/purchase`, {
			devices,
			address,
		});
	}
}
