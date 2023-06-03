import { FC, useEffect, useState } from 'react';
import Slider from 'react-slick';
import styles from './popular.module.scss';
import { IDevice } from '../../models/deviceModels';
import useFetching from '../../hooks/useFetching';
import DeviceService from '../../http/services/DeviceService';
import { API_URL } from '../../_config';
import { Link } from 'react-router-dom';
import Loader from '../_UI/loader/Loader';
import Rating from '../device/rating/Rating';
import SlideIn, { SlideInDirections } from '../../animations/SlideIn';
import { NextArrow, PrevArrow } from './arrows/Arrows';

const Popular: FC = () => {
	const [count, setCount] = useState<number>(5);

	const [devices, setDevices] = useState<IDevice[]>([]);
	const [fetchDevices, isLoading, error] = useFetching(async () => {
		const response = await DeviceService.getPopular();
		setDevices(response.data.devices);
	});

	useEffect(() => {
		fetchDevices();
		const handleResize = () => {
			const windowWidth = window.innerWidth;
			setCount(Math.min(Math.floor(windowWidth / 200), 5));
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return devices.length === 0 ? null : (
		<SlideIn direction={SlideInDirections.TOP}>
			<div className={styles.popular}>
				<h2 className={styles.popular__title}>Популярные товары</h2>
				{isLoading ? (
					<Loader />
				) : (
					<Slider
						dots={count > 1}
						infinite={true}
						speed={500}
						slidesToShow={count}
						slidesToScroll={1}
						autoplay={true}
						autoplaySpeed={3000}
						// prevArrow={<PrevArrow />}
						// nextArrow={<NextArrow />}
					>
						{devices.map((device) => (
							<div key={device.id} className={styles.popular__item}>
								<Link
									to={`/device/${device.id}`}
									className={styles.popular__itemImage}
								>
									<img src={`${API_URL}/${device.preview}`} alt='IMAGE' />
								</Link>
								<Link
									to={`/device?type=${device.type}`}
									className={styles.popular__itemType}
								>
									{device.type}
								</Link>
								<Link
									to={`/device/${device.id}`}
									className={styles.popular__itemTitle}
								>
									{device.title}
								</Link>
								<div className={styles.popular__itemRating}>
									<Rating
										rating={Number(device.rating)}
										ratingCount={Number(device.rating_count)}
									/>
								</div>
								<p className={styles.popular__itemPrice}>{device.price} руб.</p>
							</div>
						))}
					</Slider>
				)}
			</div>
		</SlideIn>
	);
};

export default Popular;