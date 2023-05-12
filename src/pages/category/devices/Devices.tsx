import { FC, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { fetchDevices } from '../../../redux/device/deviceSlice';
import DeviceList from './device-list/DeviceList';
import Loader from '../../../components/_UI/loader/Loader';
import useDebounce from '../../../hooks/useDebounce';
import { devicesSlice } from '../../../redux/device/deviceSlice';
import { IFilter } from '../../../models/filterModels';
import DevicePagination from './device-pagination/DevicePagination';
import styles from './devices.module.scss';

type DevicesProps = {
	type: string;
};

const Devices: FC<DevicesProps> = ({ type }) => {
	const dispatch = useAppDispatch();
	const { resetDevices } = devicesSlice.actions;

	const [delay, setDelay] = useState<number>(600);

	const { devices, isLoading } = useAppSelector((state) => state.devices);
	const { filter } = useAppSelector((state) => state.filter);

	// NOTE рефакторинг задержки при изменении фильтров
	const debounceFilter = useDebounce<IFilter>(filter, delay);

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		dispatch(fetchDevices(type, filter));
		setDelay(600);
	}, [debounceFilter]);

	useEffect(() => {
		setDelay(0);
	}, [filter.order, filter.page]);

	useEffect(() => {
		dispatch(resetDevices());
		setDelay(0);
	}, [type]);

	return (
		<div className={styles.devices}>
			{isLoading ? (
				<div className={styles.devices__loader}>
					<Loader />
				</div>
			) : (
				<>
					<DeviceList devices={devices} />
					<DevicePagination />
				</>
			)}
		</div>
	);
};

export default Devices;
