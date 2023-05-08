import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './category.module.scss';
import Filter from './filter/Filter';
import Devices from './devices/Devices';

const Category: FC = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const type = params.get('type') as string;

	return (
		<div className={[styles.category, 'container'].join(' ')}>
			<h1 className={styles.category__title}>Поиск по категории "{type}"</h1>
			<div className={styles.category__content}>
				<Filter type={type} />
				<Devices type={type} />
			</div>
		</div>
	);
};

export default Category;
