import { FC } from 'react';
import { getPages } from '../../../utils/utils';
import PaginationItem from './pagination-item/PaginationItem';
import styles from './pagination.module.scss';

type PaginationProps = {
	total: number;
	current: number;
	setPage: (page: number) => void;
};

const Pagination: FC<PaginationProps> = ({ total, current, setPage }) => {
	const totalPages = getPages(total);
	const nearPages = Array.from({ length: getPages(total) }, (_, index) => index + 1).slice(
		current === totalPages ? totalPages - 3 : Math.max(current - 2, 0),
		current === 1 ? 3 : Math.min(current + 1, totalPages)
	);

	return (
		<ul className={styles.pagination}>
			{current > 2 && (
				<>
					<PaginationItem page={1} onClick={() => setPage(1)} />
					{current > 3 && <span>....</span>}
				</>
			)}
			{nearPages.map((page) => (
				<PaginationItem
					key={page}
					page={page}
					selected={page === current}
					onClick={() => setPage(page)}
				/>
			))}
			{current < totalPages - 1 && (
				<>
					{current < totalPages - 2 && <span>....</span>}
					<PaginationItem page={totalPages} onClick={() => setPage(totalPages)} />
				</>
			)}
		</ul>
	);
};

export default Pagination;
