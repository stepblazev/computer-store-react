import { ChangeEvent, FC, useEffect, useState } from 'react';
import { IDeviceFull } from '../../../../models/deviceModels';
import useFetching from '../../../../hooks/useFetching';
import DeviceService from '../../../../http/services/DeviceService';
import Loader from '../../../../components/_UI/loader/Loader';
import Button from '../../../../components/_UI/button/Button';
import Counter from '../../../../components/_UI/counter/Counter';
import Group from '../../../../components/_UI/group/Group';
import AdminDeviceImages from '../admin-device-images/AdminDeviceImages';
import AdminService from '../../../../http/services/AdminService';
import { Link } from 'react-router-dom';
import AdminDeviceType from '../admin-device-type/AdminDeviceType';
import { ISelectorOption } from '../../../../components/_UI/selector/Selector';
import AdminDeviceBrand from '../admin-device-brand/AdminDeviceBrand';
import AdminDeviceProperties from '../admin-device-properties/AdminDeviceProperties';
import styles from './admin-device-full.module.scss';

type AdminDeviceFullProps = {
	id: number;
	back: () => any;
};

const AdminDeviceFull: FC<AdminDeviceFullProps> = ({ id, back }) => {
	const [showSave, setShowSave] = useState<boolean>(false);

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

	const deleteImage = async (full: string, preview: string) => {
		if (confirm('Удалить изображение?')) {
			await AdminService.deleteImage(id, full, preview);
			fetchDevice();
		}
	};

	const deleteDeviceHandler = async () => {
		const allow = confirm('Удалить товар?');
		if (!allow) return;
		await AdminService.deleteDevice(id);
		back();
	};

	const saveDeviceHandler = async () => {
		const allow = confirm('Сохранить изменения?');
		if (!allow || !device) return;
		await AdminService.putDevice(device);
		setShowSave(false);
	};

	const resetDeviceHandler = async () => {
		const allow = confirm('Сбросить изменения?');
		if (!allow) return;
		fetchDevice();
		setShowSave(false);
	};
	console.log(device);

	return (
		<div className={styles.full}>
			<div className={styles.full__back}>
				<Button label='Вернутья назад' onClick={back} />
				<Link to={`/device/${id}`} target='_blank'>
					Товар №{id}
				</Link>
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
					<Group label='Описание'>
						<div className={styles.full__content}>
							<div className={styles.full__contentField}>
								<span>Название: </span>
								<input
									placeholder='Название'
									value={device?.title}
									onChange={(e: ChangeEvent<HTMLInputElement>) => {
										setDevice({ ...device!, title: e.target.value });
										setShowSave(true);
									}}
									style={{ width: '500px' }}
								/>
							</div>
							<div className={styles.full__contentField}>
								<span>Тип: </span>
								<AdminDeviceType
									type={device?.type ?? ''}
									setType={(option: ISelectorOption<string>) => {
										setDevice({ ...device!, type: option.value });
										setShowSave(true);
									}}
								/>
							</div>
							<div className={styles.full__contentField}>
								<span>Производитель: </span>
								<AdminDeviceBrand
									type={device?.type ?? ''}
									brand={device?.brand ?? ''}
									setBrand={(brand: string) => {
										setDevice({ ...device!, brand });
										setShowSave(true);
									}}
								/>
							</div>
							<div className={styles.full__contentField}>
								<span>Цена: </span>
								<input
									type='number'
									min={0}
									placeholder='Цена'
									value={device?.price.toString()}
									onChange={(e: ChangeEvent<HTMLInputElement>) => {
										setDevice({
											...device!,
											price: Number(e.target.value),
										});
										setShowSave(true);
									}}
									style={{ width: '100px' }}
								/>
								<span>руб.</span>
							</div>
							<div className={styles.full__contentField}>
								<span>Гарантия: </span>
								<Counter
									from={0}
									to={999}
									current={device?.warranty ?? 0}
									onChange={(newValue: number) => {
										setDevice({ ...device!, warranty: newValue });
										setShowSave(true);
									}}
								/>
								месяцев
							</div>
							<div className={styles.full__contentField}>
								<span>Количество: </span>
								<Counter
									from={0}
									to={999}
									current={device?.quantity ?? 0}
									onChange={(newValue: number) => {
										setDevice({ ...device!, quantity: newValue });
										setShowSave(true);
									}}
								/>
								штук
							</div>

							<div className={styles.full__controls}>
								{showSave && (
									<>
										<Button
											label='Сохранить изменения'
											onClick={saveDeviceHandler}
										/>
										<Button
											label='Сбросить изменения'
											onClick={resetDeviceHandler}
										/>
									</>
								)}
								<Button label='Удалить товар' onClick={deleteDeviceHandler} />
							</div>
						</div>
					</Group>
					<Group label='Характеристики'>
						<AdminDeviceProperties fetchDevice={fetchDevice} device={device ?? null} />
					</Group>
				</>
			)}
		</div>
	);
};

export default AdminDeviceFull;
