import { AxiosResponse } from 'axios';
import { IDeviceFull, IType } from '../../models/deviceModels';
import api from '..';
import { IBrand } from '../../models/filterModels';

export default class AdminService {
	static async getBrands(type: string, template: string): Promise<AxiosResponse<IBrand[]>> {
		return api.get<IBrand[]>(`/brands?type=${type}&template=${template}`);
	}

	static async getTypes(): Promise<AxiosResponse<IType[]>> {
		return api.get<IType[]>(`/types`);
	}

	static async postType(type: string): Promise<AxiosResponse<IType[]>> {
		return api.post<IType[]>(`/types`, { type });
	}

	static async deleteType(type: string): Promise<AxiosResponse<any>> {
		return api.delete<any>(`/types?type=${type}`);
	}

	static async putDevice(device: IDeviceFull): Promise<AxiosResponse<any>> {
		return api.put<any>(`/device/${device.id}`, {
			title: device.title,
			price: device.price,
			type: device.type,
			quantity: device.quantity,
			brand: device.brand,
			warranty: device.warranty,
		});
	}

	static async deleteDevice(id: number): Promise<AxiosResponse<any>> {
		return api.delete<any>(`/device/${id}`);
	}

	static async postImage(id: number, data: string): Promise<AxiosResponse<any>> {
		const formData = new FormData();
		formData.append('image', data);
		return api.post<any>(`/device/${id}/image`, formData);
	}

	static async deleteImage(
		id: number,
		full: string,
		preview: string
	): Promise<AxiosResponse<any>> {
		return api.delete<any>(`/device/${id}/image?full=${full}&preview=${preview}`);
	}
}