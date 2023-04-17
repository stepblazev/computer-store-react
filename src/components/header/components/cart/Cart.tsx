import { FaShoppingCart as CartSVG } from 'react-icons/fa';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './cart.module.scss';

const Cart: FC = () => {
	return (
		<Link to='/cart' className={[styles.cart, 'svg-link'].join(' ')}>
			<CartSVG className={styles.cart__svg} />
			<span className={styles.cart__title}>Корзина</span>
			<span className={styles.cart__count}>3</span>
		</Link>
	);
};

export default Cart;
