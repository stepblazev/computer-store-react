import { FC } from 'react';
import ChangeOrder from '../change-order/ChangeOrder';
import styles from './category-header.module.scss';

type CategoryHeeaderProps = {
	type: string;
};

const CategoryHeader: FC<CategoryHeeaderProps> = ({ type }) => {
	return (
		<div className={styles.header}>
			<h1 className={styles.header__title}>Поиск по категории "{type}"</h1>
			<ChangeOrder />
		</div>
	);
};

export default CategoryHeader;
