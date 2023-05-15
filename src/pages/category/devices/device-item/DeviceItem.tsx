import { FC } from 'react';
import { IDevice } from '../../../../models/deviceModels';
import noimages from '../../../../assets/noimage.png';
import { API_URL } from '../../../../_config';
import DeviceQuantity from '../../../../components/device/device-quantity/DeivceQuantity';
import DeviceToCart from '../../../../components/device/device-to-cart/DeviceToCart';
import { useAppSelector } from '../../../../hooks/redux';
import CartRemove from '../../../../components/device/cart-remove/CartRemove';
import styles from './device-item.module.scss';

type DeviceItemProps = {
	device: IDevice;
};

const DeviceItem: FC<DeviceItemProps> = ({ device }) => {
	const { devices } = useAppSelector((state) => state.cart);

	const inCart: boolean = Boolean(devices.find((d) => d.id === device.id));

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
						<span className={styles.item__titleText}>{device.title}</span>
						<DeviceQuantity quantity={device.quantity} />
					</span>
					{device.quantity > 0 && <span>{device.price} руб.</span>}
				</h3>
				<p className={styles.item__desc}>{device.properties}</p>
				{device.quantity > 0 && (
					<div className={styles.item__cart}>
						{inCart ? <CartRemove device={device} /> : <DeviceToCart device={device} />}
					</div>
				)}
			</div>
		</div>
	);
};

export default DeviceItem;
