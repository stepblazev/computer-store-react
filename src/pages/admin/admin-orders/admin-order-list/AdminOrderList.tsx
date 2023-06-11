import { FC } from 'react';
import { IAdminOrder } from '../../../../models/accountModels';
import AdminOrderItem from '../admin-order-item/AdminOrderItem';
import styles from './admin-order-list.module.scss';

type AdminOrderListProps = {
	orders: IAdminOrder[];
	setSearch: (value: string) => any;
	fetchOrders: () => any;
};

const AdminOrderList: FC<AdminOrderListProps> = ({ orders, setSearch, fetchOrders }) => {
	if (orders.length === 0) return <div>Нет результатов</div>;

	return (
		<ul className={styles.list}>
			{orders.map((order) => (
				<AdminOrderItem setSearch={setSearch} order={order} fetchOrders={fetchOrders} />
			))}
		</ul>
	);
};

export default AdminOrderList;
