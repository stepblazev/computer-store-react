import { FC } from 'react';
import styles from './order-list.module.scss';
import { IOrder } from '../../../../models/accountModels';
import OrderItem from '../order-item/OrderItem';
import SlideIn, { SlideInDirections } from '../../../../animations/SlideIn';

type OrderListProps = {
	orders: IOrder[];
};

const OrderList: FC<OrderListProps> = ({ orders }) => {
	if (orders.length === 0) return null;

	return (
		<ul className={styles.list}>
			{orders.map((order, index) => (
				<SlideIn direction={SlideInDirections.TOP} delay={index * 100}>
					<OrderItem key={order.id} order={order} />
				</SlideIn>
			))}
		</ul>
	);
};

export default OrderList;
