import { FC } from 'react';
import { IDevice } from '../../../../../models/deviceModels';
import { BsMotherboard as DeviceSVG } from 'react-icons/bs';
import { API_URL } from '../../../../../_config';
import noimages from '../../../../../assets/noimage.png';
import styles from './device-list.module.scss';

type DeviceListProps = {
	devices: IDevice[];
	hideResults: () => void;
};

// FIXME вставить ссылку
// FIXME доработать адаптив
const DeviceList: FC<DeviceListProps> = ({ devices, hideResults }) => {
	if (!devices.length) return null;

	return (
		<ul className={styles.list}>
			<li className={styles.list__header}>
				<DeviceSVG />
				Товары:
			</li>
			{devices.map((device) => (
				<li key={device.id} className={styles.device} onClick={hideResults}>
					<div className={styles.device__image}>
						<img
							src={device.preview ? `${API_URL}/${device.preview}` : noimages}
							alt='Нет картинки'
						/>
					</div>
					<div className={styles.device__content}>
						<div className={styles.device__title}>
							<span>
								{device.title}
								<span
									className={[
										styles.device__exists,
										device.quantity > 0 ? 'green' : 'red',
									].join(' ')}
								>
									{device.quantity > 0 ? 'В наличии' : 'Нет на складе'}
								</span>
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
