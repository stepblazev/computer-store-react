import { ChangeEvent, FC, useEffect, useState } from 'react';
import { IDeviceFull } from '../../../../models/deviceModels';
import useFetching from '../../../../hooks/useFetching';
import DeviceService from '../../../../http/services/DeviceService';
import Loader from '../../../../components/_UI/loader/Loader';
import Button from '../../../../components/_UI/button/Button';
import Counter from '../../../../components/_UI/counter/Counter';
import styles from './admin-device-full.module.scss';
import AdminDeviceImages from '../admin-device-images/AdminDeviceImages';
import AdminService from '../../../../http/services/AdminService';

type AdminDeviceFullProps = {
	id: number;
	back: () => any;
};

const AdminDeviceFull: FC<AdminDeviceFullProps> = ({ id, back }) => {
	const [device, setDevice] = useState<IDeviceFull>();

	const [fetchDevice, isLoading, error] = useFetching(async () => {
		const response = await DeviceService.getSingle(id);
		setDevice(response.data);
	});

	useEffect(() => {
		fetchDevice();
	}, []);

	const postImage = async (data: string) => {
		await AdminService.postImage(id, data);
		fetchDevice();
	};

	const deleteImage = async (image: string) => {
		if (confirm('Удалить изображение?')) {
			await AdminService.deleteImage(id, image);
			fetchDevice();
		}
	};

	return (
		<div className={styles.full}>
			<div className={styles.full__back}>
				<Button label='Вернутья назад' onClick={back} />
			</div>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<AdminDeviceImages
						images={device?.images ?? []}
						deleteHandler={deleteImage}
						addHandler={postImage}
					/>
					<div className={styles.full__content}>
						<div className={styles.full__contentName}>
							<span className={styles.full__contentField}>Название: </span>
							<input
								placeholder='Название'
								value={device?.title}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setDevice({ ...device!, title: e.target.value })
								}
							/>
						</div>
						<div className={styles.full__contentPrice}>
							<span className={styles.full__contentField}>Цена: </span>
							<input
								placeholder='Цена'
								value={device?.price.toString()}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setDevice({ ...device!, price: Number(e.target.value) })
								}
							/>
							<span className={styles.full__contentField}>руб.</span>
						</div>
						<div className={styles.full__contentPrice}>
							<span className={styles.full__contentField}>Количество: </span>
							<Counter
								from={0}
								to={999}
								current={device?.quantity ?? 0}
								onChange={(newValue: number) =>
									setDevice({ ...device!, quantity: newValue })
								}
							/>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default AdminDeviceFull;
