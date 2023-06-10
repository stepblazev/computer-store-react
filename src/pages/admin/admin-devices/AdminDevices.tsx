import { ChangeEvent, FC, useEffect, useState } from 'react';
import AdminTypes from './admin-types/AdminType';
import Pagination from '../../../components/_UI/pagination/Pagination';
import { DEVICE_LIMIT, DEVICE_PRICE } from '../../../_config';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchDevices } from '../../../redux/device/deviceSlice';
import { OrderTypes } from '../../../models/filterModels';
import useDebounce from '../../../hooks/useDebounce';
import AdminDeviceList from './admin-device-list/AdminDeviceList';
import Loader from '../../../components/_UI/loader/Loader';
import AdminDeviceFull from './admin-device-full/AdminDeviceFull';
import styles from './admin-devices.module.scss';
import Button from '../../../components/_UI/button/Button';
import AdminService from '../../../http/services/AdminService';

const AdminDevices: FC = () => {
	const dispatch = useAppDispatch();

	const { devices, total, isLoading } = useAppSelector((state) => state.devices);
	const [deviceId, setDeviceId] = useState<number | null>(null);

	const [type, setType] = useState<string>('');
	const [search, setSearch] = useState<string>('');
	const [page, setPage] = useState<number>(1);

	const debounceSearch = useDebounce(search, 700);

	const updateDevices = () => {
		dispatch(
			fetchDevices(type, {
				search,
				price: { from: 0, to: DEVICE_PRICE },
				brands: [],
				properties: {},
				order: OrderTypes.QUANTITY,
				page,
			})
		);
	};

	useEffect(() => {
		window.scrollTo({ top: 0 });
		updateDevices();
	}, [type, page, debounceSearch]);

	useEffect(() => {
		setPage(1);
	}, [type, debounceSearch]);

	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, [deviceId]);

	const postHandler = async () => {
		const name: string | null = prompt('Введите название: ');
		if (!name) return;
		const response = await AdminService.postDevice(name, type);
		const id = response.data;
		console.log(id);

		setDeviceId(id);
	};

	return (
		<div className={styles.devices}>
			{deviceId ? (
				<AdminDeviceFull
					id={deviceId}
					back={() => {
						setDeviceId(null);
						updateDevices();
					}}
				/>
			) : (
				<>
					<AdminTypes type={type} setType={setType} />
					<div className={styles.devices__content}>
						<div className={styles.filter}>
							<input
								type='search'
								placeholder='Поиск по названию или ID товара'
								value={search}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setSearch(e.target.value)
								}
							/>
							{Boolean(type.length) && (
								<Button label='Добавить' onClick={postHandler} />
							)}
						</div>
						{isLoading ? (
							<Loader />
						) : (
							<>
								<AdminDeviceList
									fetchDevices={updateDevices}
									setDevice={setDeviceId}
									devices={devices}
								/>
								<Pagination
									total={total}
									current={page}
									setPage={setPage}
									limit={DEVICE_LIMIT}
								/>
							</>
						)}
					</div>
				</>
			)}
		</div>
	);
};

export default AdminDevices;
