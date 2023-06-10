import { FC } from 'react';
import { IAdminOrder } from '../../../../models/accountModels';
import styles from './admin-order-list.module.scss';
import { getDateFromSQLString } from '../../../../utils/utils';

type AdminOrderListProps = {
	orders: IAdminOrder[];
};

const AdminOrderList: FC<AdminOrderListProps> = ({ orders }) => {
	if (orders.length === 0) return <div>Нет результатов</div>;

	return (
		<ul className={styles.list}>
			{orders.map((order) => (
				<li key={order.id} className={styles.item}>
					<h4 className={styles.item__title}>
						<span className={styles.item__titleId}>
							Заказ №{order.id} от {getDateFromSQLString(order.created_at)}
						</span>
						<span
							className={styles.item__titleStatus}
							style={{
								color: order.completed ? 'mediumseagreen' : 'gray',
							}}
						>
							{order.completed
								? 'Завершен'
								: order.canceled
								? 'Отменен'
								: 'В процессе'}
						</span>
					</h4>
					<p className={styles.item__client}>Клиент: {order.email}</p>
					<ul className={styles.item__list}>
						{order.devices.map((name) => (
							<li key={name}>{name}</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	);
};

export default AdminOrderList;
