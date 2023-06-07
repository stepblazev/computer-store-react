import { FC, useState, MouseEvent } from 'react';
import { IImage } from '../../../models/deviceModels';
import { API_URL } from '../../../_config';
import SlideIn, { SlideInDirections } from '../../../animations/SlideIn';
import {
	FaRegArrowAltCircleRight as RightSVG,
	FaRegArrowAltCircleLeft as LeftSVG,
} from 'react-icons/fa';
import noImage from '../../../assets/noimage.png';
import Modal from '../modal/Modal';
import Viewer from 'react-viewer';
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
					<Modal state={modal} hide={() => setModal(false)}>
						<div className={styles.modal}>
							<img src={`${API_URL}/${images[current].url_full}`} alt='full' />
						</div>
					</Modal>
					{/* <Viewer
						drag={false}
						attribute={false}
						scalable={false}
						noImgDetails={true}
						rotatable={false}
						loop={false}
						noNavbar={true}
						showTotal={false}
						visible={modal}
						zoomSpeed={1}
						minScale={1}
						maxScale={3}
						disableMouseZoom={true}
						onClose={() => {
							setModal(false);
						}}
						images={[{ src: `${API_URL}/${images[current].url_full}`, alt: 'ERROR' }]}
					/> */}
				</>
			) : (
				<div className={styles.images__full}>
					<img src={noImage} alt='full' />
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
