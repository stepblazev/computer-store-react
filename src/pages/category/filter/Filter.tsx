import { FC, useEffect } from 'react';
import Checkbox from '../../../components/_UI/checkbox/Checkbox';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { fetchFilter } from '../../../redux/filter/filterSlice';
import styles from './filter.module.scss';

type FilterType = {
	type: string;
};

const Filter: FC<FilterType> = ({ type }) => {
	const dispatch = useAppDispatch();

	const { brands: allBrands, properties: allProperties } = useAppSelector(
		(state) => state.filter
	);
	const { brands, properties, price } = useAppSelector((state) => state.filter.filter);

	useEffect(() => {
		dispatch(fetchFilter(type));
	}, []);

	return (
		<div className={styles.filter}>
			{JSON.stringify(allBrands)}
			{allBrands.map((brand) => (
				<Checkbox key={brand.id} label={brand.name} checked={false} />
			))}
			{allBrands.map((brand) => (
				<Checkbox key={brand.id} label={brand.name} checked={true} />
			))}
		</div>
	);
};

export default Filter;
