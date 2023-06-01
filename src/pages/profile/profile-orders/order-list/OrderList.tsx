import { FC } from 'react';
import styles from './order-list.module.scss';
import { IOrder } from '../../../../models/accountModels';
import OrderItem from '../order-item/OrderItem';
import SlideIn, { SlideInDirections } from '../../../../animations/SlideIn';

type OrderListProps = {
	orders: IOrder[];
};

const OrderList: FC<OrderListProps> = ({ orders }) => {
	if (orders.length === 0) return <i>Вы пока не сделали ни одного заказа</i>;

	return (
		<ul className={styles.list}>
			{orders.map((order, index) => (
				<SlideIn key={order.id} direction={SlideInDirections.TOP} delay={index * 100}>
					<OrderItem order={order} />
				</SlideIn>
			))}
		</ul>
	);
};

export default OrderList;
