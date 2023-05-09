import { FC, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { fetchFilter } from '../../../redux/filter/filterSlice';
import Property from './property/Property';
import Brands from './brands/Brands';
import PriceChanger from './price/PriceChanger';
import Search from './search/Search';
import styles from './filter.module.scss';

type FilterProps = {
	type: string;
};

const Filter: FC<FilterProps> = ({ type }) => {
	const dispatch = useAppDispatch();

	const { brands, properties } = useAppSelector((state) => state.filter);

	useEffect(() => {
		dispatch(fetchFilter(type));
	}, [type]);

	return (
		<div className={styles.filter}>
			<Search />
			{Boolean(brands.length) && <Brands brands={brands} />}
			<PriceChanger />
			<div className={styles.property_list}>
				{properties.map((property) => (
					<Property key={property.property_name} property={property} />
				))}
			</div>
		</div>
	);
};

export default Filter;
