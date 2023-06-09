import { IDeviceFull, IDeviceOrder } from './deviceModels';

export interface IAccountResponse {
	id: number;
	email: string;
	name: string | null;
	address: string | null;
}

export interface IOrder {
	id: number;
	total_price: number;
	created_at: string;
	completed: boolean;
	canceled: boolean;
	address: string;
	devices_short: string[];
	devices_long: IDeviceOrder[];
	quantity: number;
}

export interface IOrderResponse {
	orders: IOrder[];
}

export interface IAdminOrder extends IOrder {
	email: string;
}

export interface IAdminOrderResponse {
	orders: IAdminOrder[];
	total: number;
}
