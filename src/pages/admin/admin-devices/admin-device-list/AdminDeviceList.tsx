import { FC } from 'react';
import styles from './admin-device-list.module.scss';
import { IDevice } from '../../../../models/deviceModels';
import { API_URL } from '../../../../_config';

type AdminDeviceListProps = {
	devices: IDevice[];
	setDevice: (id: number) => any;
};

const AdminDeviceList: FC<AdminDeviceListProps> = ({ devices, setDevice }) => {
	return (
		<div className={styles.list}>
			{devices.map((device) => (
				<div className={styles.list__item} onClick={() => setDevice(device.id)}>
					<img src={`${API_URL}/${device.preview}`} alt='IMAGE' />
					<h2>
						{device.id} | {device.title}
					</h2>
				</div>
			))}
		</div>
	);
};

export default AdminDeviceList;
