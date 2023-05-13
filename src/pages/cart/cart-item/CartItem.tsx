import { FC } from 'react';
import { ICartDevice } from '../../../models/cartModels';
import noimages from '../../../assets/noimage.png';
import { API_URL } from '../../../_config';
import Button from '../../../components/_UI/button/Button';
import { removeFromCart } from '../../../redux/cart/cartSlice';
import { useAppDispatch } from '../../../hooks/redux';
import styles from './cart-item.module.scss';

type CartItemProps = {
	device: ICartDevice;
};

const CartItem: FC<CartItemProps> = ({ device }) => {
	const dispatch = useAppDispatch();

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
					<span>
						{device.title}
						<span
							className={[
								styles.item__exists,
								device.quantity > 0 ? 'green' : 'red',
							].join(' ')}
						>
							{device.quantity > 0 ? 'В наличии' : 'Нет на складе'}
						</span>
					</span>
					<span className={styles.item__price}>{device.price} руб.</span>
				</h3>
				<p>{device.properties}</p>
				<div className={styles.item__cart}>
					<Button
						label='Удалить из корзины'
						onClick={() => {
							dispatch(removeFromCart(device.id));
						}}
					/>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
