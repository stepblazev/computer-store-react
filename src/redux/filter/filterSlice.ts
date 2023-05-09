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
} from '../../models/filterModels';
import { AppDispatch } from '../store';
import DeviceService from '../../http/services/DeviceService';

interface FilterState {
	filter: IFilter;
	brands: IBrand[];
	properties: IProperty[];
	isLoading: boolean;
	error: string | null;
}

const initialState: FilterState = {
	filter: {
		search: '',
		price: {
			from: 0,
			to: 9999,
		},
		brands: [],
		properties: {},
	},
	brands: [],
	properties: [],
	isLoading: false,
	error: null,
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		fetchFilter(state) {
			state.brands = [];
			state.properties = [];
			state.isLoading = true;
			state.error = null;
		},
		fetchFilterSuccess(state, action: PayloadAction<IPropertiesResponse>) {
			state.isLoading = false;
			state.brands = action.payload.brands;
			state.properties = action.payload.properties;
		},
		fetchFilterError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
		setSearch(state, action: PayloadAction<string>) {
			state.filter.search = action.payload;
		},
		setPrice(state, action: PayloadAction<IPrice>) {
			const { from, to } = action.payload;
			state.filter.price.from = from;
			state.filter.price.to = to;
		},
		addBrand(state, action: PayloadAction<string>) {
			const newBrand = action.payload;
			state.filter.brands.push(newBrand);
		},
		removeBrand(state, action: PayloadAction<string>) {
			const newBrand = action.payload;
			state.filter.brands = state.filter.brands.filter((brand) => brand !== newBrand);
		},
		addProperty(state, action: PayloadAction<IPropertyValue>) {
			const newProperty = action.payload;
			if (state.filter.properties[newProperty.name]) {
				state.filter.properties[newProperty.name].push(newProperty.value);
			} else {
				state.filter.properties[newProperty.name] = [newProperty.value];
			}
		},
		removeProperty(state, action: PayloadAction<IPropertyValue>) {
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
					to: 9999,
				},
				brands: [],
				properties: {},
			};
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
