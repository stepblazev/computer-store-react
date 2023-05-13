import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchCart } from '../../../redux/cart/cartSlice';
import CartItem from '../cart-item/CartItem';
import styles from './cart-list.module.scss';
import SlideIn, { SlideInDirections } from '../../../animations/SlideIn';

const CartList: FC = () => {
	const dispatch = useAppDispatch();
	const { devices } = useAppSelector((state) => state.cart);

	useEffect(() => {
		dispatch(fetchCart());
	}, []);

	return (
		<ul className={styles.list}>
			{devices.map((device, index) => (
				<SlideIn key={device.id} direction={SlideInDirections.TOP} delay={index * 100}>
					<CartItem device={device} />
				</SlideIn>
			))}
		</ul>
	);
};

export default CartList;
