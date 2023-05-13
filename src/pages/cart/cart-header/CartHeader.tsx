import { FC } from 'react';
import styles from './cart-header.module.scss';

const CartHeader: FC = () => {
	return (
		<div className={styles.header}>
			<h1 className={styles.header__title}>Ваша корзина</h1>
		</div>
	);
};

export default CartHeader;
