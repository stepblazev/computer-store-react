import { FC, MouseEvent } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { addToCart } from '../../../redux/cart/cartSlice';
import { IDevice } from '../../../models/deviceModels';
import { FaShoppingCart as CartSVG } from 'react-icons/fa';
import styles from './device-to-cart.module.scss';

type DeviceToCartProps = {
	device: IDevice;
};

const DeviceToCart: FC<DeviceToCartProps> = ({ device }) => {
	const dispatch = useAppDispatch();

	const handler = (e: MouseEvent<HTMLButtonElement>) => {
		dispatch(addToCart(device.id));
	};

	return (
		<button onClick={handler} className={styles.cart}>
			<CartSVG />
			<span className={styles.cart__label}>В корзину</span>
		</button>
	);
};

export default DeviceToCart;
