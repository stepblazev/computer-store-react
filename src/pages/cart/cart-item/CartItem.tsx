import { FC } from 'react';
import { ICartDevice } from '../../../models/cartModels';
import noimages from '../../../assets/noimage.png';
import { API_URL } from '../../../_config';
import styles from './cart-item.module.scss';
import CartCounter from '../cart-counter/CartCounter';
import CartRemove from '../../../components/device/cart-remove/CartRemove';
import DeviceQuantity from '../../../components/device/device-quantity/DeivceQuantity';

type CartItemProps = {
	device: ICartDevice;
};

// FIXME добавить ссылки
const CartItem: FC<CartItemProps> = ({ device }) => {
	return (
		<li className={styles.item}>
			<div className={styles.item__image}>
				<img
					src={device.preview ? `${API_URL}/${device.preview}` : noimages}
					alt='Нет изображения'
				/>
			</div>
			<div className={styles.item__content}>
				<h3 className={styles.item__title}>
					<span className={styles.item__titleText}>{device.title}</span>
					<span className={styles.item__price}>{device.price} руб.</span>
				</h3>
				<DeviceQuantity quantity={device.quantity} />
				{Boolean(device.quantity) && (
					<div className={styles.item__counter}>
						<CartCounter device={device} />
					</div>
				)}
				<div className={styles.item__remove}>
					<CartRemove device={device} />
				</div>
			</div>
		</li>
	);
};

export default CartItem;
