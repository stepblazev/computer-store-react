import { FC } from 'react';
import Range from '../../../../components/_UI/range/Range';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { filterSlice } from '../../../../redux/filter/filterSlice';
import styles from '../filter.module.scss';

const PriceChanger: FC = () => {
	const dispatch = useAppDispatch();
	const { setPrice } = filterSlice.actions;

	const { price } = useAppSelector((state) => state.filter.filter);

	const onChange = (values: number[]) => {
		dispatch(setPrice({ from: values[0], to: values[1] }));
	};

	return (
		<div className={styles.property}>
			<h3>Диапазон цен</h3>
			<Range
				label={`От ${price.from} до ${price.to} руб.`}
				min={0}
				max={9999}
				values={[price.from, price.to]}
				onChange={onChange}
			/>
		</div>
	);
};

export default PriceChanger;
