import { AxiosResponse } from 'axios';
import { ISearch } from '../../models/deviceModels';
import api from '..';

export default class DeviceService {
	static async search(search: string): Promise<AxiosResponse<ISearch>> {
		return api.get<ISearch>(`/device/search`, {
			params: {
				search,
			},
		});
	}
}
