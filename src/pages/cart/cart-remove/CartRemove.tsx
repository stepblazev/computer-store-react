import { FC } from 'react';
import { MdDeleteOutline as RemoveSVG } from 'react-icons/md';
import { ICartDevice } from '../../../models/cartModels';
import { useAppDispatch } from '../../../hooks/redux';
import { removeFromCart } from '../../../redux/cart/cartSlice';
import TrashBin from '../../../animations/trash-bin/TrashBin';
import styles from './cart-remove.module.scss';

type CartRemoveProps = {
	device: ICartDevice;
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
