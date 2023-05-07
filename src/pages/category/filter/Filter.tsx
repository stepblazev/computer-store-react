import { FC, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { fetchFilter } from '../../../redux/filter/filterSlice';
import Property from './property/Property';
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
	}, [type]);

	return (
		<div className={styles.filter}>
			{/* {allBrands.map((brand) => (
				<Checkbox key={brand.id} label={brand.name} checked={true} />
			))} */}
			{allProperties.map((property) => (
				<Property property={property} />
			))}
		</div>
	);
};

export default Filter;
