import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IDeviceFull } from '../../models/deviceModels';
import useFetching from '../../hooks/useFetching';
import DeviceService from '../../http/services/DeviceService';
import Loader from '../../components/_UI/loader/Loader';
import Images from '../../components/_UI/images/Images';
import { Link } from 'react-router-dom';
import Rating from '../../components/device/rating/Rating';
import { AiOutlineRollback as BackSVG } from 'react-icons/ai';
import styles from './device.module.scss';
import SlideIn, { SlideInDirections } from '../../animations/SlideIn';

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
			{isLoading ? null : (
				<div className={styles.device__content}>
					<Link to={`/device?type=${device?.type}`} className={styles.device__redirect}>
						<BackSVG />
						Все товары из категории "{device?.type}"
					</Link>
					<div className={styles.device__description}>
						<div className={styles.device__descriptionImage}>
							<Images images={device?.images ?? []} />
						</div>
						<SlideIn direction={SlideInDirections.RIGHT}>
							<div className={styles.device__descriptionTitle}>
								<h1>{device?.title}</h1>
								<p>{device?.description}</p>
								<Rating
									rating={Number(device?.rating)}
									ratingCount={Number(device?.rating_count)}
								/>
							</div>
						</SlideIn>
					</div>
				</div>
			)}
		</div>
	);
};

export default Device;
