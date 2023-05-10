import { FC } from 'react';
import { IDevice } from '../../../../models/deviceModels';
import styles from './device-list.module.scss';
import DeviceItem from '../device-item/DeviceItem';
import SlideIn, { SlideInDirections } from '../../../../animations/SlideIn';

type DeviceListProps = {
	devices: IDevice[];
};

const DeviceList: FC<DeviceListProps> = ({ devices }) => {
	return (
		<div className={styles.list}>
			{Boolean(!devices.length) && <h2>Поиск не дал результатов</h2>}
			{devices.map((device, index) => (
				<SlideIn direction={SlideInDirections.RIGHT} delay={index * 100}>
					<DeviceItem key={device.id} device={device} />
				</SlideIn>
			))}
		</div>
	);
};

export default DeviceList;
