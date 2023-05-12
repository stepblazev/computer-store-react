import { FC, MouseEvent } from 'react';
import styles from './pagination-item.module.scss';

type PaginationItemProps = {
	page: number;
	selected?: boolean;
	onClick: (e: MouseEvent<HTMLLIElement>) => any;
};

const PaginationItem: FC<PaginationItemProps> = ({ page, selected = false, onClick }) => {
	return (
		<li onClick={onClick} className={selected ? styles.page_selected : styles.page}>
			{page}
		</li>
	);
};

export default PaginationItem;
