import { FC } from 'react';
import CartHeader from './cart-header/CartHeader';
import styles from './cart.module.scss';
import CartList from './cart-list/CartList';

const Cart: FC = () => {
	return (
		<div className={styles.cart}>
			<div className={[styles.cart__content, 'container'].join(' ')}>
				<CartHeader />
				<CartList />
			</div>
		</div>
	);
};

export default Cart;
