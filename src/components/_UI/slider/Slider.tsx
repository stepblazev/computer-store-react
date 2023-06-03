import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './slider.module.scss';
import Slider from 'react-slick';
import Button from '../button/Button';

export interface ISliderItem {
	img: string;
	url: string;
}

type SliderProps = {
	items: ISliderItem[];
};

const ImageSlider: FC<SliderProps> = ({ items }) => {
	return (
		<div className={styles.slider}>
			<Slider
				infinite={true}
				slidesToShow={1}
				slidesToScroll={1}
				adaptiveHeight={false}
				autoplay={true}
				autoplaySpeed={3000}
				arrows={false}
			>
				{items.map((item) => (
					<div key={item.img} className={styles.slider__item}>
						<img src={item.img} alt={item.url} />
						<Link to={item.url}>Перейти</Link>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default ImageSlider;
