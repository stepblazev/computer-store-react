import { AxiosResponse } from 'axios';
import api from '..';
import { IFilter, IGetDeviceParams, OrderTypes } from '../../models/filterModels';
import { IDevice, IDeviceFull, IDevicesResponse, IType } from '../../models/deviceModels';
import { IPropertiesResponse } from '../../models/filterModels';

export default class DeviceService {
	static async search(search: string): Promise<AxiosResponse<IDevicesResponse>> {
		const filters: IGetDeviceParams = { search, _order: OrderTypes.QUANTITY, _page: 1 };
		return api.get<IDevicesResponse>(`/device`, {
			params: filters,
		});
	}

	static async getProperies(type: string): Promise<AxiosResponse<IPropertiesResponse>> {
		return api.get<IPropertiesResponse>(`/device/properties`, {
			params: { type },
		});
	}

	static async getSingle(id: string | number): Promise<AxiosResponse<IDeviceFull>> {
		return api.get<IDeviceFull>(`/device/${id}`);
	}

	static async getDevices(
		type: string,
		filter: IFilter
	): Promise<AxiosResponse<IDevicesResponse>> {
		const filters: IGetDeviceParams = {
			type,
			search: filter.search,
			brands: filter.brands.join(','),
			filters: JSON.stringify(filter.properties),
			price: `${filter.price.from}-${filter.price.to}`,
			_order: filter.order,
			_page: filter.page,
		};
		return api.get<IDevicesResponse>(`/device`, {
			params: filters,
		});
	}

	static async getPopular(): Promise<AxiosResponse<IDevicesResponse>> {
		const filters: IGetDeviceParams = {
			_order: OrderTypes.QUANTITY,
			_page: 1,
		};
		return api.get<IDevicesResponse>(`/device`, {
			params: filters,
		});
	}
}
