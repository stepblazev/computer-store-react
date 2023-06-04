import { AxiosResponse } from 'axios';
import { IType } from '../../models/deviceModels';
import api from '..';

export default class AdminService {
	static async getTypes(): Promise<AxiosResponse<IType[]>> {
		return api.get<IType[]>(`/device/types`);
	}

	static async postType(type: string): Promise<AxiosResponse<any>> {
		return api.post<IType[]>(`/device/types`, { type });
	}
}
