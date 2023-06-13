import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ComponentLinks } from '../../../components/header/navLinks';
import ImageSlider, { ISliderItem } from '../../../components/_UI/slider/Slider';
import slide_1 from '../../../assets/slider-1.png';
import slide_2 from '../../../assets/slider-2.png';
import slide_3 from '../../../assets/slider-3.png';
import styles from './home-banner.module.scss';

const sliderItems: ISliderItem[] = [
	{ img: slide_1, url: '/device?type=монитор' },
	{ img: slide_2, url: '/device?type=компьютер' },
	{ img: slide_3, url: '/device?type=ноутбук' },
];

const HomeBanner: FC = () => {
	return (
		<div className={styles.banner}>
			<ul className={styles.banner__components}>
				{ComponentLinks.map((link) => (
					<li key={link.label}>
						<Link to={link.endpoint}>{link.label}</Link>
					</li>
				))}
			</ul>
			<div className={styles.banner__banner}>
				<ImageSlider items={sliderItems} />
			</div>
		</div>
	);
};

export default HomeBanner;
