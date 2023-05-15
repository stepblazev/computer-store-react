import { FC, useEffect } from 'react';
import { FaShoppingCart as CartSVG } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './cart.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { cartSlice, fetchCart } from '../../../../redux/cart/cartSlice';

const Cart: FC = () => {
	const dispatch = useAppDispatch();
	const { resetCart } = cartSlice.actions;

	const { isAuth } = useAppSelector((state) => state.auth);
	const { devices } = useAppSelector((state) => state.cart);

	useEffect(() => {
		isAuth ? dispatch(fetchCart()) : dispatch(resetCart());
	}, [isAuth]);

	return (
		<Link to={isAuth ? '/cart' : '/login'} className={[styles.cart, 'svg-link'].join(' ')}>
			<CartSVG className={styles.cart__svg} />
			<span className={styles.cart__title}>Корзина</span>
			{isAuth && devices.length > 0 && (
				<span className={styles.cart__count}>{devices.length}</span>
			)}
		</Link>
	);
};

export default Cart;
