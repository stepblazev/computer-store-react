import { FC } from 'react';

import styles from './rating.module.scss';
import Stars from '../../_UI/stars/Stars';

type Rating = {
	rating: number;
	ratingCount: number;
};

const Rating: FC<Rating> = ({ rating, ratingCount = 0 }) => {
	if (ratingCount === 0) return <p className={styles.none}>Нет отзывов</p>;

	return (
		<div className={styles.rating}>
			<Stars rating={rating} />
			<span>({ratingCount})</span>
		</div>
	);
};

export default Rating;
