export enum OrderTypes {
	QUANTITY = 'QUANTITY',
	PRICE_TOP = 'PRICE_TOP',
	PRICE_LOW = 'PRICE_LOW',
}

export type IGetDeviceParams = {
	search?: string;
	type?: string;
	brands?: string;
	price?: string;
	filters?: string;
	_order: OrderTypes;
	_page: number;
};
