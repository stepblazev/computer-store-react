import { FC } from 'react';
import { IDevice } from '../../../../models/deviceModels';
import noimages from '../../../../assets/noimage.png';
import { API_URL } from '../../../../_config';
import DeviceQuantity from '../../../../components/device/device-quantity/DeivceQuantity';
import DeviceToCart from '../../../../components/device/device-to-cart/DeviceToCart';
import { useAppSelector } from '../../../../hooks/redux';
import CartRemove from '../../../../components/device/cart-remove/CartRemove';
import styles from './device-item.module.scss';
import Rating from '../../../../components/device/rating/Rating';
import { Link } from 'react-router-dom';

type DeviceItemProps = {
	device: IDevice;
};

const DeviceItem: FC<DeviceItemProps> = ({ device }) => {
	const { devices } = useAppSelector((state) => state.cart);

	const inCart: boolean = Boolean(devices.find((d) => d.id === device.id));

	return (
		<div className={styles.item}>
			<Link to={`/device/${device.id}`} className={styles.item__image}>
				<img
					src={device.preview ? `${API_URL}/${device.preview}` : noimages}
					alt='Нет изображения'
				/>
			</Link>
			<div className={styles.item__content}>
				<h3 className={styles.item__title}>
					<span>
						<Link to={`/device/${device.id}`} className={styles.item__titleText}>
							{device.title || 'Без названия'}
						</Link>
						<DeviceQuantity quantity={device.quantity} />
					</span>
					{device.quantity > 0 && (
						<span className={styles.item__titlePrice}>{device.price} руб.</span>
					)}
				</h3>
				<Rating rating={Number(device.rating)} ratingCount={Number(device.rating_count)} />
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
