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
	devices: string[];
	quantity: number;
}

export interface IOrderResponse {
	orders: IOrder[];
}
