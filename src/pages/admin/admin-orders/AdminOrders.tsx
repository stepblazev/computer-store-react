import { FC, useState, useEffect, ChangeEvent } from 'react';
import useDebounce from '../../../hooks/useDebounce';
import { IAdminOrder } from '../../../models/accountModels';
import styles from './admin-orders.module.scss';
import useFetching from '../../../hooks/useFetching';
import AdminService, { ShowOrders } from '../../../http/services/AdminService';
import Loader from '../../../components/_UI/loader/Loader';
import Selector, { ISelectorOption } from '../../../components/_UI/selector/Selector';
import AdminOrderList from './admin-order-list/AdminOrderList';
import AdminOrderPagination from './admin-order-pagination/AdminOrderPagination';
import Button from '../../../components/_UI/button/Button';

const ShowOptions: ISelectorOption<ShowOrders>[] = [
	{ label: 'все', value: ShowOrders.ALL },
	{ label: 'текущие', value: ShowOrders.ACTIVE },
	{ label: 'завершенные', value: ShowOrders.COMPLETED },
	{ label: 'отмененные', value: ShowOrders.CANCELED },
];

const AdminOrders: FC = () => {
	const [orders, setOrders] = useState<IAdminOrder[]>([]);
	const [search, setSearch] = useState<string>('');
	const [show, setShow] = useState<ShowOrders>(ShowOrders.ALL);
	const [page, setPage] = useState<number>(1);
	const [total, setTotal] = useState<number>(0);

	const debounceSearch = useDebounce(search, 700);

	const [fetchOrders, isLoading, error] = useFetching(async () => {
		const response = await AdminService.getOrders(search, page, show);
		setOrders(response.data.orders);
		setTotal(response.data.total);
	});

	useEffect(() => {
		window.scrollTo({ top: 0 });
		fetchOrders();
	}, [page, debounceSearch, show]);

	useEffect(() => {
		setPage(1);
	}, [debounceSearch, show]);

	return (
		<div className={styles.orders}>
			<div className={styles.orders__filter}>
				<input
					type='search'
					placeholder='Поиск по E-Mail клиента или ID заказа'
					value={search}
					onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
				/>
				<Selector
					placeholder='Отобразить'
					options={ShowOptions}
					value={ShowOptions.find((opt) => opt.value === show)}
					onChange={(opt) => setShow(opt.value)}
				/>
				<div className={styles.orders__filterRefresh}>
					<Button
						label='Обновить'
						onClick={() => {
							setPage(() => 1);
							fetchOrders();
						}}
					/>
				</div>
			</div>

			{isLoading ? (
				<Loader />
			) : (
				<div>
					<AdminOrderList
						fetchOrders={fetchOrders}
						orders={orders}
						setSearch={setSearch}
					/>
					<AdminOrderPagination total={total} page={page} setPage={setPage} />
				</div>
			)}
		</div>
	);
};

export default AdminOrders;
