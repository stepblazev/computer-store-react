import { FC } from 'react';
import { IDevice } from '../../../../../models/deviceModels';
import { BsMotherboard as DeviceSVG } from 'react-icons/bs';
import { IImage } from '../../../../../models/deviceModels';
import styles from './device-list.module.scss';

type DeviceListProps = {
	devices: IDevice[];
};

// FIXME вставить ссылку
const DeviceList: FC<DeviceListProps> = ({ devices }) => {
	if (!devices.length) return null;

	return (
		<ul className={styles.list}>
			<li className={styles.list__header}>
				<DeviceSVG />
				Товары:
			</li>
			{devices.map((device) => (
				<li key={device.id} className={styles.device}>
					{/* {typeof device.images[0] === 'string' && (
						<div className={styles.device__image}>
							<img src={device.images[0].url_preview} alt='' />
						</div>
					)} */}
					<div className={styles.device__content}>
						<div className={styles.device__title}>
							<span>
								{device.title}
								{Boolean(device.quantity) && (
									<span className={styles.device__exists}>В наличии</span>
								)}
							</span>
							<span>{Number(device.price).toFixed(2)} руб.</span>
						</div>
						<div className={styles.device__description}>{device.properties}</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default DeviceList;
