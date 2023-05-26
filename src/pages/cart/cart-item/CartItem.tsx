import { FC, MouseEvent } from 'react';
import { ICartDevice } from '../../../models/cartModels';
import noimages from '../../../assets/noimage.png';
import { API_URL } from '../../../_config';
import CartCounter from '../cart-counter/CartCounter';
import CartRemove from '../../../components/device/cart-remove/CartRemove';
import DeviceQuantity from '../../../components/device/device-quantity/DeivceQuantity';
import { useAppDispatch } from '../../../hooks/redux';
import { purchaseSlice } from '../../../redux/purchase/purchaseSlice';
import CartPurchase from '../../../components/device/cart-purchase/CartPurchase';
import { Link } from 'react-router-dom';
import styles from './cart-item.module.scss';

type CartItemProps = {
	device: ICartDevice;
};

// FIXME добавить ссылки
const CartItem: FC<CartItemProps> = ({ device }) => {
	const dispatch = useAppDispatch();
	const { showPurchase } = purchaseSlice.actions;

	const purchase = (e: MouseEvent<HTMLButtonElement>) => {
		dispatch(showPurchase([device]));
	};

	return (
		<li className={styles.item}>
			<div className={styles.item__image}>
				<Link to={`/device/${device.id}`}>
					<img
						src={device.preview ? `${API_URL}/${device.preview}` : noimages}
						alt='Нет изображения'
					/>
				</Link>
			</div>
			<div className={styles.item__content}>
				<h3 className={styles.item__title}>
					<Link to={`/device/${device.id}`} className={styles.item__titleText}>
						{device.title}
					</Link>
					<span className={styles.item__price}>{device.price} руб.</span>
				</h3>
				<DeviceQuantity quantity={device.quantity} />
				{Boolean(device.quantity) && (
					<div className={styles.item__counter}>
						<CartCounter device={device} />
					</div>
				)}
				<div className={styles.item__controls}>
					<CartPurchase device={device} />
					<CartRemove device={device} />
				</div>
			</div>
		</li>
	);
};

export default CartItem;
