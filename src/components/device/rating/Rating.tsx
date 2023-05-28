import { FC } from 'react';
import {
	ImStarFull as StarSVG,
	ImStarHalf as SemiStarSVG,
	ImStarEmpty as EmptyStarSVG,
} from 'react-icons/im';
import styles from './rating.module.scss';

type Rating = {
	rating: number;
	ratingCount: number;
};

const Rating: FC<Rating> = ({ rating, ratingCount = 0 }) => {
	if (ratingCount === 0) return <p className={styles.none}>Нет отзывов</p>;

	const template: any[] = Array(5).fill(0);
	rating /= 2;

	return (
		<div className={styles.rating}>
			<div className={styles.rating__content}>
				{template.map((_, index) => {
					if (rating >= 1) {
						rating--;
						return <StarSVG key={index} />;
					} else if (rating < 1 && rating > 0) {
						rating = 0;
						return <SemiStarSVG key={index} />;
					} else {
						return <EmptyStarSVG key={index} />;
					}
				})}
			</div>
			<span>({ratingCount})</span>
		</div>
	);
};

export default Rating;
