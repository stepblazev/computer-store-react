import { FC, useState, useEffect } from 'react';
import { IOrder } from '../../../models/accountModels';
import Group from '../../../components/_UI/group/Group';
import useFetching from '../../../hooks/useFetching';
import AccountService from '../../../http/services/AccountService';
import styles from './profile-orders.module.scss';
import Loader from '../../../components/_UI/loader/Loader';
import OrderList from './order-list/OrderList';

const ProfileOrders: FC = () => {
	const [orders, setOrders] = useState<IOrder[]>([]);
	const [fetchOrders, isLoading, error] = useFetching(async () => {
		const response = await AccountService.getOrders();
		setOrders(response.data.orders);
	});

	useEffect(() => {
		fetchOrders();
	}, []);

	return (
		<Group
			label={
				orders.length
					? `Список заказов (${orders
							.reduce((acc, val) => acc + val.total_price, 0)
							.toFixed(2)} руб.)`
					: 'Список заказов'
			}
		>
			<div className={styles.orders}>
				<OrderList orders={orders} />
				{isLoading && <Loader />}
				{Boolean(error) && <h3 className={styles.orders__error}>{error}</h3>}
			</div>
		</Group>
	);
};

export default ProfileOrders;
