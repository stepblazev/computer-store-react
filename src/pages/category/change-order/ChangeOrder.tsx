import { FC } from 'react';
import Selector, { ISelectorOption } from '../../../components/_UI/selector/Selector';
import { OrderTypes } from '../../../models/filterModels';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { devicesSlice } from '../../../redux/device/deviceSlice';

const orderOptions = [
	{ value: OrderTypes.QUANTITY, label: 'Сначала популярные' },
	{ value: OrderTypes.PRICE_TOP, label: 'Сначала дорогие' },
	{ value: OrderTypes.PRICE_LOW, label: 'Сначала дешевые' },
];

const ChangeOrder: FC = () => {
	const dispatch = useAppDispatch();
	const { setOrder } = devicesSlice.actions;

	const { order } = useAppSelector((state) => state.devices);

	const onChange = (option: ISelectorOption) => {
		dispatch(setOrder(option.value));
	};

	return (
		<Selector
			placeholder='Сортировать'
			defaultValue={orderOptions.find((option) => option.value === order)}
			onChange={onChange}
			options={orderOptions}
		/>
	);
};

export default ChangeOrder;
