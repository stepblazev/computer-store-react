import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IDeviceFull } from '../../models/deviceModels';
import useFetching from '../../hooks/useFetching';
import DeviceService from '../../http/services/DeviceService';
import { Link } from 'react-router-dom';
import { AiOutlineRollback as BackSVG } from 'react-icons/ai';
import DeviceDescription from './device-description/DeviceDescription';
import styles from './device.module.scss';
import DeviceRate from './device-rate/DeviceRate';
import RateForm from './rate-form/RateForm';
import Popular from '../../components/popular/Popular';

const Device: FC = () => {
	const { id } = useParams();

	const [device, setDevice] = useState<IDeviceFull>();
	const [fetchDevice, isLoading, error] = useFetching(async () => {
		if (!id) return;
		const response = await DeviceService.getSingle(id);
		setDevice(response.data);
	});

	useEffect(() => {
		window.scrollTo({
			top: 0,
		});
		fetchDevice();
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
					<DeviceRate
						id={Number(id)}
						rating={device.rating ?? 0}
						rating_count={device.rating_count ?? 0}
					/>
					<RateForm device={device} />
					<Popular />
				</>
			)}
		</div>
	);
};

export default Device;
