import { ChangeEvent, FC, useEffect, useState } from 'react';
import styles from './admin-devices.module.scss';
import AdminTypes from './admin-types/AdminType';
import DeviceList from '../../category/devices/device-list/DeviceList';
import Pagination from '../../../components/_UI/pagination/Pagination';
import { DEVICE_LIMIT } from '../../../_config';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchDevices } from '../../../redux/device/deviceSlice';
import { OrderTypes } from '../../../models/filterModels';
import useDebounce from '../../../hooks/useDebounce';
import AdminDeviceList from './admin-device-list/AdminDeviceList';
import Button from '../../../components/_UI/button/Button';

const AdminDevices: FC = () => {
	const dispatch = useAppDispatch();

	const { devices, total } = useAppSelector((state) => state.devices);

	const [deviceId, setDeviceId] = useState<number | null>(null);

	const [type, setType] = useState<string>('');
	const [search, setSearch] = useState<string>('');
	const [page, setPage] = useState<number>(1);

	const debounceSearch = useDebounce(search, 700);

	useEffect(() => {
		window.scrollTo({ top: 0 });
		dispatch(
			fetchDevices(type, {
				search,
				price: { from: 0, to: 3000 },
				brands: [],
				properties: {},
				order: OrderTypes.QUANTITY,
				page,
			})
		);
	}, [type, page, debounceSearch]);

	useEffect(() => {
		setPage(1);
	}, [type, debounceSearch]);

	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, [deviceId]);

	return (
		<div className={styles.devices}>
			{deviceId ? (
				<div>
					<Button label='Вернутья назад' onClick={() => setDeviceId(null)} />
				</div>
			) : (
				<>
					<AdminTypes type={type} setType={setType} />
					<div className={styles.devices__content}>
						<div className={styles.filter}>
							<input
								type='text'
								placeholder='Поиск по названию или ID'
								value={search}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setSearch(e.target.value)
								}
							/>
						</div>
						<AdminDeviceList setDevice={setDeviceId} devices={devices} />
						<Pagination
							total={total}
							current={page}
							setPage={setPage}
							limit={DEVICE_LIMIT}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default AdminDevices;
