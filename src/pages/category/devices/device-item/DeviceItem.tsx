import { FC } from 'react';
import { IDevice } from '../../../../models/deviceModels';
import noimages from '../../../../assets/noimage.png';
import styles from './device-item.module.scss';
import { API_URL } from '../../../../_config';
import Button from '../../../../components/_UI/button/Button';
import { useAppDispatch } from '../../../../hooks/redux';
import DeviceQuantity from '../../../../components/device/device-quantity/DeivceQuantity';
import { addToCart } from '../../../../redux/cart/cartSlice';

type DeviceItemProps = {
	device: IDevice;
};

const DeviceItem: FC<DeviceItemProps> = ({ device }) => {
	const dispatch = useAppDispatch();

	return (
		<div className={styles.item}>
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
						<DeviceQuantity quantity={device.quantity} />
					</span>
					<span>{device.price} руб.</span>
				</h3>
				<p>{device.properties}</p>
				<div className={styles.item__cart}>
					<Button
						label='В корзину'
						onClick={() => {
							dispatch(addToCart(device.id));
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default DeviceItem;
