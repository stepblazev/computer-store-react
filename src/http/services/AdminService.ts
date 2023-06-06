import { AxiosResponse } from 'axios';
import { IType } from '../../models/deviceModels';
import api from '..';

export default class AdminService {
	static async getTypes(): Promise<AxiosResponse<IType[]>> {
		return api.get<IType[]>(`/types`);
	}

	static async postType(type: string): Promise<AxiosResponse<IType[]>> {
		return api.post<IType[]>(`/types`, { type });
	}

	static async deleteType(type: string): Promise<AxiosResponse<any>> {
		return api.delete<any>(`/types?type=${type}`);
	}

	static async deleteDevice(id: number): Promise<AxiosResponse<any>> {
		return api.delete<any>(`/device/${id}`);
	}

	static async postImage(id: number, data: string): Promise<AxiosResponse<any>> {
		const formData = new FormData();
		formData.append('image', data);
		return api.post<any>(`/device/${id}/image`, formData);
	}

	static async deleteImage(id: number, image: string): Promise<AxiosResponse<any>> {
		return api.delete<any>(`/device/${id}/image?image=${image}`);
	}
}
