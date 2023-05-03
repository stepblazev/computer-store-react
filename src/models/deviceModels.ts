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
	images: IImage[];
}

export interface ISearch {
	types: IType[];
	devices: IDevice[];
}
