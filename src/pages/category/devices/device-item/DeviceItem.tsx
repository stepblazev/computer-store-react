import { FC } from 'react';
import { IDevice } from '../../../../models/deviceModels';
import noimages from '../../../../assets/noimage.png';
import styles from './device-item.module.scss';
import { API_URL } from '../../../../_config';

type DeviceItemProps = {
	device: IDevice;
};

const DeviceItem: FC<DeviceItemProps> = ({ device }) => {
	return (
		<div className={styles.item}>
			<div className={styles.item__image}>
				<img
					src={device.preview ? `${API_URL}/${device.preview}` : noimages}
					alt='Нет изображения'
				/>
			</div>
			<div className={styles.item__content}>
				<h3>
					{device.title}
					<span className={styles.item__exists}>
						{device.quantity > 0 ? 'В наличии' : 'Нет на складе'}
					</span>
				</h3>
				<p>{device.properties}</p>
			</div>
		</div>
	);
};

export default DeviceItem;
