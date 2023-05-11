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

export interface IPropertyValue {
	name: string;
	value: string;
}

export interface IBrand {
	id: number;
	name: string;
}

export interface IProperty {
	property_name: string;
	property_values: string[];
}

export interface IPrice {
	from: number;
	to: number;
}

export type IPropertiesResponse = {
	brands: IBrand[];
	properties: IProperty[];
};

export interface IFilter {
	search: string;
	price: IPrice;
	brands: string[];
	properties: Record<string, string[]>;
	order: OrderTypes;
	page: number;
}
