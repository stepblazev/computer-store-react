import { AxiosResponse } from 'axios';
import api from '..';
import { IRate } from '../../models/deviceModels';

export default class RateService {
	static async getRates(id: number, page: number): Promise<AxiosResponse<IRate[]>> {
		return api.get<IRate[]>(`/device/${id}/rates?_page=${page}`);
	}
}
