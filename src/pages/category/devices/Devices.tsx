import { FC, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { fetchDevices } from '../../../redux/device/deviceSlice';
import DeviceList from './device-list/DeviceList';
import Loader from '../../../components/_UI/loader/Loader';
import useDebounce from '../../../hooks/useDebounce';
import { devicesSlice } from '../../../redux/device/deviceSlice';
import styles from './devices.module.scss';

type DevicesProps = {
	type: string;
};

const Devices: FC<DevicesProps> = ({ type }) => {
	const dispatch = useAppDispatch();
	const { resetDevices } = devicesSlice.actions;

	const { devices, order, page, isLoading } = useAppSelector((state) => state.devices);
	const { filter, brands } = useAppSelector((state) => state.filter);

	const debounceFilter = useDebounce(filter, 0);

	useEffect(() => {
		dispatch(fetchDevices(type, debounceFilter, order, page));
	}, [debounceFilter, order, page]);

	useEffect(() => {
		dispatch(resetDevices());
	}, [type]);

	return (
		<div className={styles.devices}>
			{isLoading ? (
				<div className={styles.devices__loader}>
					<Loader />
				</div>
			) : (
				<DeviceList devices={devices} />
			)}
		</div>
	);
};

export default Devices;
