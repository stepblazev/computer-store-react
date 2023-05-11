import { FC, useEffect, useState } from 'react';
import Selector, { ISelectorOption } from '../../../components/_UI/selector/Selector';
import { OrderTypes } from '../../../models/filterModels';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { filterSlice } from '../../../redux/filter/filterSlice';

const orderOptions: ISelectorOption<OrderTypes>[] = [
	{ value: OrderTypes.QUANTITY, label: 'Сначала популярные' },
	{ value: OrderTypes.PRICE_TOP, label: 'Сначала дорогие' },
	{ value: OrderTypes.PRICE_LOW, label: 'Сначала дешевые' },
];

const ChangeOrder: FC = () => {
	const dispatch = useAppDispatch();
	const { setOrder } = filterSlice.actions;

	const { order } = useAppSelector((state) => state.filter.filter);
	const [currentOption, setCurrentOption] = useState<ISelectorOption<OrderTypes>>(
		orderOptions[0]
	);

	const onChange = (option: ISelectorOption<OrderTypes>) => {
		dispatch(setOrder(option.value));
	};

	useEffect(() => {
		const newOption = orderOptions.find((option) => option.value === order) ?? orderOptions[0];
		setCurrentOption(newOption);
	}, [order]);

	return (
		<Selector
			value={currentOption}
			onChange={onChange}
			options={orderOptions}
			placeholder='Сортировать'
		/>
	);
};

export default ChangeOrder;
