import { AxiosResponse } from 'axios';
import { IAccountResponse, IOrderResponse } from '../../models/accountModels';
import api from '..';

export default class AccountService {
	static async getProfile(): Promise<AxiosResponse<IAccountResponse>> {
		return api.get<IAccountResponse>('/account');
	}

	static async postData(name: string, address: string): Promise<AxiosResponse<any>> {
		return api.post<any>('/account', { name, address });
	}

	static async getOrders(): Promise<AxiosResponse<IOrderResponse>> {
		return api.get<IOrderResponse>('/orders');
	}
}
