import { FC, useEffect } from 'react';
import styles from './devices.module.scss';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { fetchDevices } from '../../../redux/device/deviceSlice';
import DeviceList from './device-list/DeviceList';

type DevicesProps = {
	type: string;
};

const Devices: FC<DevicesProps> = ({ type }) => {
	const dispatch = useAppDispatch();

	const { devices, order, page } = useAppSelector((state) => state.devices);
	const { filter } = useAppSelector((state) => state.filter);

	useEffect(() => {
		dispatch(fetchDevices(type, filter, order, page));
	}, [filter, order, page]);

	return (
		<div className={styles.devices}>
			<DeviceList devices={devices} />
		</div>
	);
};

export default Devices;
