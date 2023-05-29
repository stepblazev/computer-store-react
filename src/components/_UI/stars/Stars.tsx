import { FC } from 'react';
import {
	ImStarFull as StarSVG,
	ImStarHalf as SemiStarSVG,
	ImStarEmpty as EmptyStarSVG,
} from 'react-icons/im';
import styles from './stars.module.scss';

type StarsProps = {
	rating: number;
};

const Stars: FC<StarsProps> = ({ rating }) => {
	const template: any[] = Array(5).fill(0);

	return (
		<div className={styles.stars}>
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
	);
};

export default Stars;
