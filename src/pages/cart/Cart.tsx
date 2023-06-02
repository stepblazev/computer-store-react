import { FC } from 'react';
import CartHeader from './cart-header/CartHeader';
import styles from './cart.module.scss';
import CartList from './cart-list/CartList';
import CartOrder from './cart-order/CartOrder';
import { useAppSelector } from '../../hooks/redux';
import CartEmpty from './cart-empty/CartEmpty';
import Popular from '../../components/popular/Popular';

const Cart: FC = () => {
	const { devices } = useAppSelector((state) => state.cart);

	return (
		<div className={[styles.cart, 'container'].join(' ')}>
			{devices.length === 0 ? (
				<CartEmpty />
			) : (
				<>
					<CartHeader />
					<div className={styles.cart__content}>
						<CartList />
						<CartOrder />
					</div>
				</>
			)}
			<Popular />
		</div>
	);
};

export default Cart;
