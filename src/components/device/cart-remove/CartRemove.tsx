import { FC } from 'react';
import { MdDeleteOutline as RemoveSVG } from 'react-icons/md';
import { IDevice, IDeviceFull } from '../../../models/deviceModels';
import { useAppDispatch } from '../../../hooks/redux';
import { removeFromCart } from '../../../redux/cart/cartSlice';
import styles from './cart-remove.module.scss';

type CartRemoveProps = {
	device: IDevice | IDeviceFull;
};

const CartRemove: FC<CartRemoveProps> = ({ device }) => {
	const dispatch = useAppDispatch();

	const handler = () => {
		dispatch(removeFromCart(device.id));
	};

	return (
		<button className={styles.remove} onClick={handler}>
			<RemoveSVG />
			<span>Удалить из корзины</span>
		</button>
	);
};

export default CartRemove;
