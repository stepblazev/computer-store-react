import { FC, useState } from 'react';
import styles from './images.module.scss';
import { IImage } from '../../../models/deviceModels';
import { API_URL } from '../../../_config';
import SlideIn, { SlideInDirections } from '../../../animations/SlideIn';

type ImagesProps = {
	images: IImage[];
};

const Images: FC<ImagesProps> = ({ images }) => {
	if (!images.length) return null;

	const [current, setCurrent] = useState<IImage>(images[0]);

	return (
		<div className={styles.images}>
			<SlideIn direction={SlideInDirections.BOTTOM}>
				<div className={styles.images__full}>
					<img src={`${API_URL}/${current.url_full}`} alt='full' />
				</div>
			</SlideIn>

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
									image.url_full === current.url_full
										? styles.images__previewCurrent
										: ''
								}
								onMouseEnter={() => setCurrent(image)}
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
