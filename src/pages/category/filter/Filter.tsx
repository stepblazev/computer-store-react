import { FC, useEffect, MouseEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { fetchFilter } from '../../../redux/filter/filterSlice';
import Button from '../../../components/_UI/button/Button';
import Property from './property/Property';
import Brands from './brands/Brands';
import PriceChanger from './price-changer/PriceChanger';
import Search from './search/Search';
import styles from './filter.module.scss';

type FilterProps = {
	type: string;
};

const Filter: FC<FilterProps> = ({ type }) => {
	const dispatch = useAppDispatch();
	const { brands, properties, isLoading } = useAppSelector((state) => state.filter);

	useEffect(() => {
		dispatch(fetchFilter(type));
	}, [type]);

	const resetHandler = (e: MouseEvent<HTMLButtonElement>) => {
		dispatch(fetchFilter(type));
	};

	return (
		<div className={styles.filter}>
			{isLoading ? (
				<h2>Загрузка фильтров...</h2>
			) : (
				<>
					<Search />
					{Boolean(brands.length) && <Brands brands={brands} />}
					<PriceChanger />
					<div className={styles.property_list}>
						{properties.map((property) => (
							<Property key={property.property_name} property={property} />
						))}
					</div>
					<Button label='Сбросить фильтры' onClick={resetHandler} />
				</>
			)}
		</div>
	);
};

export default Filter;
