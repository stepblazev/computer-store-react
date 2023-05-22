export interface ILocation {
	country: string;
	city: string;
}

export interface IAddress {
	value: string;
	unrestricted_value: string;
	data: {
		postal_code: string;
		country: string;
		city_with_type: string;
		city_type: string;
		city_type_full: string;
		city: string;
		street_with_type: string;
		street_type: string;
		street_type_full: string;
		street: string;
		house: string;
		house_type: string;
		flat_type: string;
		flat_type_full: string;
		flat: string;
	};
}

export interface IAddressResponse {
	suggestions: IAddress[];
}
