import { FC } from 'react';
import { IDevice } from '../../../../models/deviceModels';
import styles from './device-list.module.scss';
import DeviceItem from '../device-item/DeviceItem';

type DeviceListProps = {
	devices: IDevice[];
};

const DeviceList: FC<DeviceListProps> = ({ devices }) => {
	return (
		<div className={styles.list}>
			{Boolean(!devices.length) && <h2>Поиск не дал результатов</h2>}
			{devices.map((device) => (
				<DeviceItem device={device} />
			))}
		</div>
	);
};

export default DeviceList;
