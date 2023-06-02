import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './category.module.scss';
import Filter from './filter/Filter';
import Devices from './devices/Devices';
import CategoryHeader from './category-header/CategoryHeader';
import Popular from '../../components/popular/Popular';

const Category: FC = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const type = params.get('type') as string;

	return (
		<div className={[styles.category, 'container'].join(' ')}>
			<CategoryHeader type={type} />
			<div className={styles.category__content}>
				<Filter type={type} />
				<Devices type={type} />
			</div>
			<Popular />
		</div>
	);
};

export default Category;
