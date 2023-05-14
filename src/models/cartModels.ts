import { IDevice } from './deviceModels';

export interface ICartDevice extends IDevice {
	amount: number;
}

export interface ISetPage {
	id: number;
	amount: number;
}
