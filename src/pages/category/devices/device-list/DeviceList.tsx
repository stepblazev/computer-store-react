import { FC } from 'react';
import { IDevice } from '../../../../models/deviceModels';
import styles from './device-list.module.scss';
import DeviceItem from '../device-item/DeviceItem';
import SlideIn, { SlideInDirections } from '../../../../animations/SlideIn';
import NoMatches from '../../../../components/_UI/no-matches/NoMatches';

type DeviceListProps = {
	devices: IDevice[];
};

const DeviceList: FC<DeviceListProps> = ({ devices }) => {
	return (
		<div className={styles.list}>
			{Boolean(!devices.length) && <NoMatches label='Поиск не дал результатов...' />}
			{devices.map((device, index) => (
				<SlideIn direction={SlideInDirections.RIGHT} delay={index * 100} key={device.id}>
					<DeviceItem device={device} />
				</SlideIn>
			))}
		</div>
	);
};

export default DeviceList;
