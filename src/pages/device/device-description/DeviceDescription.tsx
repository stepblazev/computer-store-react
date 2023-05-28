import { FC } from 'react';
import { IDeviceFull } from '../../../models/deviceModels';
import { BsList as ListSVG } from 'react-icons/bs';
import Images from '../../../components/_UI/images/Images';
import DeviceQuantity from '../../../components/device/device-quantity/DeivceQuantity';
import Rating from '../../../components/device/rating/Rating';
import CartRemove from '../../../components/device/cart-remove/CartRemove';
import DeviceToCart from '../../../components/device/device-to-cart/DeviceToCart';
import styles from './device-description.module.scss';
import { useAppSelector } from '../../../hooks/redux';

type DeviceDescriptionProps = {
	device: IDeviceFull;
};

const DeviceDescription: FC<DeviceDescriptionProps> = ({ device }) => {
	const { devices } = useAppSelector((state) => state.cart);

	const inCart: boolean = Boolean(devices.find((d) => d.id === device?.id));

	return (
		<div className={styles.description}>
			<div className={styles.description__image}>
				<Images images={device?.images ?? []} />
			</div>
			<div className={styles.description__info}>
				<h1 className={styles.description__title}>
					{device?.title} <DeviceQuantity quantity={device?.quantity ?? 0} />
				</h1>
				<p className={styles.description__desc}>{device?.description}</p>
				<div className={styles.description__rating}>
					{device.quantity > 0 && (
						<div className={styles.item__cart}>
							{inCart ? (
								<CartRemove device={device} />
							) : (
								<DeviceToCart device={device} />
							)}
						</div>
					)}
					<Rating
						rating={Number(device?.rating)}
						ratingCount={Number(device?.rating_count)}
					/>
				</div>
				<div className={styles.description__table}>
					<h2>
						<ListSVG />
						Список характеристик
					</h2>
					<table>
						<thead>
							<tr>
								<th className={styles.description__tableCell}>Название</th>
								<th className={styles.description__tableCell}>Значение</th>
							</tr>
						</thead>
						<tbody>
							{device.properties.map((prop) => (
								<tr key={prop.name}>
									<td className={styles.description__tableCell}>{prop.name}</td>
									<td className={styles.description__tableCell}>{prop.value}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default DeviceDescription;
