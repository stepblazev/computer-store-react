import { AxiosResponse } from 'axios';
import api from '..';
import { IGetDeviceParams, IPropertiesResponse, OrderTypes } from '../../models/filterModels';
import { IDevice } from '../../models/deviceModels';

export default class DeviceService {
	static async search(search: string): Promise<AxiosResponse<IDevice[]>> {
		const filters: IGetDeviceParams = { search, _order: OrderTypes.QUANTITY, _page: 1 };
		return api.get<IDevice[]>(`/device`, {
			params: filters,
		});
	}

	static async getProperies(type: string): Promise<AxiosResponse<IPropertiesResponse>> {
		return api.get<IPropertiesResponse>(`/device/properties`, {
			params: { type },
		});
	}
}
