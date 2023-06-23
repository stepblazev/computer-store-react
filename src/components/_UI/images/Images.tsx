import { FC, useState, MouseEvent } from 'react';
import { IImage } from '../../../models/deviceModels';
import { API_URL, IMAGE_ZOOM_SCALE } from '../../../_config';
import SlideIn, { SlideInDirections } from '../../../animations/SlideIn';
import {
	FaRegArrowAltCircleRight as RightSVG,
	FaRegArrowAltCircleLeft as LeftSVG,
} from 'react-icons/fa';
import noImage from '../../../assets/noimage.png';
import styles from './images.module.scss';

type ImagesProps = {
	images: IImage[];
};

const Images: FC<ImagesProps> = ({ images }) => {
	const [modal, setModal] = useState<boolean>(false);
	const [current, setCurrent] = useState<number>(0);

	const leftHandler = (e: MouseEvent<HTMLButtonElement>) => {
		setCurrent((prev) => prev - 1);
	};

	const rightHandler = (e: MouseEvent<HTMLButtonElement>) => {
		setCurrent((prev) => prev + 1);
	};

	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [position, setPosition] = useState<any>({ x: 0, y: 0 });

	const handleMouseEnter = (event: MouseEvent<HTMLImageElement>) => {
		setIsHovered(true);
		updatePosition(event);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handleMouseMove = (event: MouseEvent<HTMLImageElement>) => {
		updatePosition(event);
	};

	const updatePosition = (event: MouseEvent<HTMLImageElement>) => {
		if (window.innerWidth < 978) {
			setPosition({ x: 0, y: 0 });
			setIsHovered(false);
			return;
		}
		const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
		const x = (event.clientX - left) / width;
		const y = (event.clientY - top) / height;
		setPosition({ x, y });
	};

	return (
		<div className={styles.images}>
			{images.length > 0 ? (
				<>
					<SlideIn direction={SlideInDirections.BOTTOM}>
						<div className={styles.full}>
							<img
								onClick={() => setModal(true)}
								src={`${API_URL}/${images[current].url_full}`}
								alt='full'
								style={{
									position: 'absolute',
									left: '0',
									top: '0',
									width: '100%',
									height: '100%',
									transformOrigin: `${position.x * 100}% ${position.y * 100}%`,
									transform: `scale(${isHovered ? IMAGE_ZOOM_SCALE : 1})`,
								}}
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
								onMouseMove={handleMouseMove}
							/>
							{current > 0 && (
								<button className={styles.full__left} onClick={leftHandler}>
									<LeftSVG />
								</button>
							)}
							{current < images.length - 1 && (
								<button className={styles.full__right} onClick={rightHandler}>
									<RightSVG />
								</button>
							)}
						</div>
					</SlideIn>
				</>
			) : (
				<div className={styles.full}>
					<img src={noImage} alt='full' style={{ cursor: 'default' }} />
				</div>
			)}
			{images.length > 1 && (
				<ul className={styles.images__preview}>
					{images.map((image, index) => (
						<SlideIn
							key={image.url_full}
							direction={SlideInDirections.TOP}
							delay={index * 100}
						>
							<li
								className={
									image.url_full === images[current].url_full
										? styles.images__previewCurrent
										: ''
								}
								onClick={() => setCurrent(index)}
							>
								<img src={`${API_URL}/${image.url_preview}`} alt='preview' />
							</li>
						</SlideIn>
					))}
				</ul>
			)}
		</div>
	);
};

export default Images;
