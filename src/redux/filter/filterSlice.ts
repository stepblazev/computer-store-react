import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorResponse } from '../../models/axiosModels';
import { AxiosError } from 'axios';
import {
	IBrand,
	IFilter,
	IPrice,
	IPropertiesResponse,
	IProperty,
	IPropertyValue,
	OrderTypes,
} from '../../models/filterModels';
import { AppDispatch } from '../store';
import DeviceService from '../../http/services/DeviceService';
import { DEVICE_PRICE } from '../../_config';

interface FilterState {
	filter: IFilter;
	brands: IBrand[];
	properties: IProperty[];
	top_price: number;
	low_price: number;
	isLoading: boolean;
	error: string | null;
}

const initialState: FilterState = {
	filter: {
		search: '',
		price: {
			from: 0,
			to: DEVICE_PRICE,
		},
		brands: [],
		properties: {},
		order: OrderTypes.QUANTITY,
		page: 1,
	},
	brands: [],
	properties: [],
	isLoading: false,
	top_price: 0,
	low_price: 0,
	error: null,
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		fetchFilter(state) {
			state.brands = [];
			state.properties = [];
			state.top_price = 0;
			state.low_price = 0;
			state.isLoading = true;
			state.error = null;
		},
		fetchFilterSuccess(state, action: PayloadAction<IPropertiesResponse>) {
			state.brands = action.payload.brands;
			state.properties = action.payload.properties;
			state.top_price = action.payload.top_price;
			state.low_price = action.payload.low_price;
			state.filter.price.to = action.payload.top_price;
			state.filter.price.from = action.payload.low_price;
			state.isLoading = false;
		},
		fetchFilterError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
		setSearch(state, action: PayloadAction<string>) {
			state.filter.page = 1;
			state.filter.search = action.payload;
		},
		setPrice(state, action: PayloadAction<IPrice>) {
			state.filter.page = 1;
			const { from, to } = action.payload;
			state.filter.price.from = from;
			state.filter.price.to = to;
		},
		addBrand(state, action: PayloadAction<string>) {
			state.filter.page = 1;
			const newBrand = action.payload;
			state.filter.brands.push(newBrand);
		},
		removeBrand(state, action: PayloadAction<string>) {
			state.filter.page = 1;
			const newBrand = action.payload;
			state.filter.brands = state.filter.brands.filter((brand) => brand !== newBrand);
		},
		addProperty(state, action: PayloadAction<IPropertyValue>) {
			state.filter.page = 1;
			const newProperty = action.payload;
			if (state.filter.properties[newProperty.name]) {
				state.filter.properties[newProperty.name].push(newProperty.value);
			} else {
				state.filter.properties[newProperty.name] = [newProperty.value];
			}
		},
		removeProperty(state, action: PayloadAction<IPropertyValue>) {
			state.filter.page = 1;
			const newProperty = action.payload;

			state.filter.properties[newProperty.name] = state.filter.properties[
				newProperty.name
			].filter((property) => property !== newProperty.value);

			if (state.filter.properties[newProperty.name].length === 0) {
				delete state.filter.properties[newProperty.name];
			}
		},
		resetFilter(state) {
			state.filter = {
				search: '',
				price: {
					from: 0,
					to: DEVICE_PRICE,
				},
				brands: [],
				properties: {},
				order: OrderTypes.QUANTITY,
				page: 1,
			};
		},
		setPage(state, action: PayloadAction<number>) {
			state.filter.page = action.payload;
		},
		setOrder(state, action: PayloadAction<OrderTypes>) {
			state.filter.page = 1;
			state.filter.order = action.payload;
		},
	},
});

export const fetchFilter = (type: string) => async (dispatch: AppDispatch) => {
	try {
		dispatch(filterSlice.actions.resetFilter());
		dispatch(filterSlice.actions.fetchFilter());
		const response = await DeviceService.getProperies(type);
		dispatch(filterSlice.actions.fetchFilterSuccess(response.data));
	} catch (error) {
		const err = error as AxiosError<ErrorResponse>;
		const message = err.response?.data.message as string;
		dispatch(filterSlice.actions.fetchFilterError(message));
	}
};
