import { FC } from 'react';
import { IDevice } from '../../../../models/deviceModels';
import { API_URL } from '../../../../_config';
import Rating from '../../../../components/device/rating/Rating';
import { useAppDispatch } from '../../../../hooks/redux';
import { notificationSlice } from '../../../../redux/notifications/notificationSlice';
import { deleteSuccess } from '../../../../warnings/adminWarnings';
import AdminService from '../../../../http/services/AdminService';
import noImage from '../../../../assets/noimage.png';
import AdminDeleteDevice from '../admin-delete-device/AdminDeleteDevice';
import styles from './admin-device-list.module.scss';
import AdminEditDevice from '../admin-edit-device/AdminEditDevice';

type AdminDeviceListProps = {
	devices: IDevice[];
	setDevice: (id: number) => any;
	fetchDevices: () => any;
};

const AdminDeviceList: FC<AdminDeviceListProps> = ({ devices, setDevice, fetchDevices }) => {
	const dispatch = useAppDispatch();
	const { addNotification } = notificationSlice.actions;

	const deleteHandler = async (id: number) => {
		const allow = confirm('Удалить товар?');
		if (!allow) return;

		await AdminService.deleteDevice(id);
		fetchDevices();
		dispatch(addNotification(deleteSuccess));
	};

	return (
		<div className={styles.list}>
			{devices.length === 0 ? (
				<div>Нет результатов</div>
			) : (
				devices.map((device) => (
					<div key={device.id} className={styles.list__item}>
						<div className={styles.list__itemImage}>
							<img
								src={device.preview ? `${API_URL}/${device.preview}` : noImage}
								alt='IMAGE'
							/>
						</div>
						<div className={styles.list__itemContent}>
							<p className={styles.list__itemTitle}>
								{device.title || 'Без названия'}
							</p>
							<Rating
								rating={Number(device.rating)}
								ratingCount={Number(device.rating_count)}
							/>
							<p className={styles.list__itemId}>
								Номер: <span className={styles.list__itemValue}>{device.id}</span>
							</p>
							<p className={styles.list__itemQuantity}>
								Количество:{' '}
								<span className={styles.list__itemValue}>
									{device.quantity} шт.
								</span>
							</p>
							<p className={styles.list__itemPrice}>
								Цена:{' '}
								<span className={styles.list__itemValue}>{device.price} руб.</span>
							</p>
							<div className={styles.list__itemControls}>
								<AdminEditDevice toDevice={() => setDevice(device.id)} />
								<AdminDeleteDevice
									deleteHandler={() => deleteHandler(device.id)}
									id={device.id}
								/>
							</div>
						</div>
					</div>
				))
			)}
		</div>
	);
};

export default AdminDeviceList;
