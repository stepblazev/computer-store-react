import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IDeviceFull } from '../../models/deviceModels';
import useFetching from '../../hooks/useFetching';
import DeviceService from '../../http/services/DeviceService';
import { Link } from 'react-router-dom';
import { AiOutlineRollback as BackSVG } from 'react-icons/ai';
import DeviceDescription from './device-description/DeviceDescription';
import styles from './device.module.scss';

const Device: FC = () => {
	const { id } = useParams();

	const [device, setDevice] = useState<IDeviceFull>();
	const [fetchDevice, isLoading, error] = useFetching(async () => {
		if (!id) return;
		const response = await DeviceService.getSingle(id);
		setDevice(response.data);
	});

	useEffect(() => {
		fetchDevice();
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, [id]);

	return (
		<div className={['container', styles.device].join(' ')}>
			{isLoading || !device ? null : (
				<>
					<Link to={`/device?type=${device?.type}`} className={styles.device__redirect}>
						<BackSVG />
						Все товары из категории "{device?.type}"
					</Link>
					<DeviceDescription device={device} />
				</>
			)}
		</div>
	);
};

export default Device;
