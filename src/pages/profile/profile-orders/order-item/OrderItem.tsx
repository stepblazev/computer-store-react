import { FC, useState } from 'react';
import { IOrder } from '../../../../models/accountModels';
import Modal from '../../../../components/_UI/modal/Modal';
import { formatQuantity, getDateFromSQLString } from '../../../../utils/utils';
import styles from './order-item.module.scss';

type OrderItemProps = {
	order: IOrder;
};

const OrderItem: FC<OrderItemProps> = ({ order }) => {
	const [modal, setModal] = useState<boolean>(false);

	const showDevices = () => {
		setModal(true);
	};

	return (
		<li className={styles.item}>
			<h4 className={styles.item__title}>
				<span className={styles.item__titleId} onClick={showDevices}>
					Заказ №{order.id} от {getDateFromSQLString(order.created_at)}
				</span>
				<span className={styles.item__titleStatus}>
					{order.completed ? 'Выполнен' : 'В процессе'}
				</span>
			</h4>
			<p className={styles.item__price}>
				Итого: {formatQuantity(order.quantity)} на сумму{' '}
				<span className={styles.item__priceValue}>{order.total_price.toFixed(2)} руб.</span>
			</p>
			<Modal state={modal} hide={() => setModal(false)}>
				<h5>Заказ №{order.id}</h5>
				<ul>
					{order.devices.map((name) => (
						<li key={name}>{name}</li>
					))}
				</ul>
			</Modal>
		</li>
	);
};

export default OrderItem;
