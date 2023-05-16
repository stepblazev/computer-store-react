import axios, { AxiosResponse } from 'axios';
import { IAddressResponse, ILocation } from '../../models/addressModels';

export const addressAPI = axios.create({
	baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		Authorization: 'Token 5df2622f63da14dd89e4778e929ce68f67ea9ff9',
	},
});

const locations: ILocation = {
	country: 'Беларусь',
	city: 'Молодечно',
};

export default class AddressService {
	static async getAddress(query: string): Promise<AxiosResponse<IAddressResponse>> {
		return addressAPI.post<IAddressResponse>('', {
			query,
			count: 4,
			locations,
		});
	}
}
