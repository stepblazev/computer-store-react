import { FC, useState, useEffect } from 'react';
import useDebounce from '../../../hooks/useDebounce';
import { IOrder } from '../../../models/accountModels';
import styles from './admin-orders.module.scss';

const AdminOrders: FC = () => {
	const [accountId, setAccountId] = useState<number | null>(null);

	const [orders, setOrders] = useState<IOrder[]>([]);
	const [search, setSearch] = useState<string>('');
	const [page, setPage] = useState<number>(1);

	const debounceSearch = useDebounce(search, 700);

	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, [page, debounceSearch]);

	useEffect(() => {
		setPage(1);
	}, [debounceSearch]);

	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, [accountId]);

	return <div className={styles.orders}>Заказы</div>;
};

export default AdminOrders;
