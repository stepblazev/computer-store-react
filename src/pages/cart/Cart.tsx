import { FC } from 'react';
import CartHeader from './cart-header/CartHeader';
import styles from './cart.module.scss';
import CartList from './cart-list/CartList';
import CartOrder from './cart-order/CartOrder';
import { useAppSelector } from '../../hooks/redux';
import CartEmpty from './cart-empty/CartEmpty';

const Cart: FC = () => {
	const { devices } = useAppSelector((state) => state.cart);

	return (
		<div className={styles.cart}>
			{devices.length === 0 ? (
				<CartEmpty />
			) : (
				<>
					<CartHeader />
					<div className={[styles.cart__content, 'container'].join(' ')}>
						<CartList />
						<CartOrder />
					</div>
				</>
			)}
		</div>
	);
};

export default Cart;
