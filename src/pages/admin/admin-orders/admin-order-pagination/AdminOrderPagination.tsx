import { FC } from 'react';
import Pagination from '../../../../components/_UI/pagination/Pagination';
import { ADMIN_ORDER_LIMIT } from '../../../../_config';

type AdminOrderPaginationProps = {
	total: number;
	page: number;
	setPage: (value: number) => any;
};

const AdminOrderPagination: FC<AdminOrderPaginationProps> = ({ total, page, setPage }) => {
	return <Pagination total={total} current={page} setPage={setPage} limit={ADMIN_ORDER_LIMIT} />;
};

export default AdminOrderPagination;
