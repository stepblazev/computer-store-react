import { FC } from 'react';
import styles from './cart-header.module.scss';
import { useAppSelector } from '../../../hooks/redux';

const CartHeader: FC = () => {
	const { devices } = useAppSelector((state) => state.cart);

	return (
		<div className={styles.header}>
			<h1 className={styles.header__title} data-amount={devices.length}>
				Ваша корзина
			</h1>
		</div>
	);
};

export default CartHeader;
