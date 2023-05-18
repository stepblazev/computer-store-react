import { FC, MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { addToCart } from '../../../redux/cart/cartSlice';
import { IDevice } from '../../../models/deviceModels';
import { FaShoppingCart as CartSVG } from 'react-icons/fa';
import styles from './device-to-cart.module.scss';
import { notificationSlice } from '../../../redux/notifications/notificationSlice';
import { authWarning } from '../../../warnings/authWarnings';

type DeviceToCartProps = {
	device: IDevice;
};

const DeviceToCart: FC<DeviceToCartProps> = ({ device }) => {
	const dispatch = useAppDispatch();
	const { addNotification } = notificationSlice.actions;

	const { isAuth } = useAppSelector((state) => state.auth);

	const handler = (e: MouseEvent<HTMLButtonElement>) => {
		isAuth ? dispatch(addToCart(device.id)) : dispatch(addNotification(authWarning));
	};

	return (
		<button onClick={handler} className={styles.cart}>
			<CartSVG />
			<span className={styles.cart__label}>В корзину</span>
		</button>
	);
};

export default DeviceToCart;
