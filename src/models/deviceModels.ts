export interface IImage {
	url_full: string;
	url_preview: string;
}

export interface IType {
	id: number;
	name: string;
}

export interface IDevice {
	id: number;
	title: string;
	price: string;
	type: string;
	brand: string;
	quantity: number;
	properties: string;
	preview: string;
	rating: string | number;
}

export type IDevicesResponse = {
	devices: IDevice[];
	total: number;
};
