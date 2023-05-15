import { FC } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import Button from '../../../components/_UI/button/Button';
import Loader from '../../../components/_UI/loader/Loader';
import styles from './cart-order.module.scss';

const CartOrder: FC = () => {
	const { devices, isLoading } = useAppSelector((state) => state.cart);

	if (isLoading)
		return (
			<div className={styles.order}>
				<Loader />
			</div>
		);

	const total: number = devices.reduce(
		(acc, device) => acc + Number(device.price) * device.amount,
		0
	);

	return (
		<div className={styles.order}>
			<h2 className={styles.order__total}>
				Итого
				<span>{total.toFixed(2)} руб.</span>
			</h2>
			<ul className={styles.order__list}>
				{devices.map((device) => (
					<li key={device.id}>
						{device.title} - {device.amount} шт.
					</li>
				))}
			</ul>
			<div className={styles.order__execute}>
				<Button label='Оформить заказ' />
			</div>
		</div>
	);
};

export default CartOrder;
