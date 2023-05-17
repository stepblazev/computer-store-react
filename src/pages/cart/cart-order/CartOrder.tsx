import { FC, MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import Button from '../../../components/_UI/button/Button';
import Loader from '../../../components/_UI/loader/Loader';
import styles from './cart-order.module.scss';
import { purchaseSlice } from '../../../redux/purchase/purchaseSlice';

const CartOrder: FC = () => {
	const dispatch = useAppDispatch();
	const { showPurchase } = purchaseSlice.actions;

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

	const purchase = (e: MouseEvent<HTMLButtonElement>) => {
		dispatch(showPurchase(devices));
	};

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
				<Button onClick={purchase} label='Оформить заказ' />
			</div>
		</div>
	);
};

export default CartOrder;