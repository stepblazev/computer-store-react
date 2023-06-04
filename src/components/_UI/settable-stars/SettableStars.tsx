import { FC, useState, MouseEvent, useEffect } from 'react';
import { ImStarFull as StarSVG, ImStarEmpty as EmptyStarSVG } from 'react-icons/im';
import styles from './settable-stars.module.scss';

type SettableStarsProps = {
	min?: number;
	max?: number;
	rating: number | null;
	setRating: (newRating: number) => any;
};

const SettableStars: FC<SettableStarsProps> = ({ min = 0, max = 5, rating, setRating }) => {
	const [current, setCurrent] = useState<number>(0);

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		const containerWidth = e.currentTarget.offsetWidth;
		const mouseX = e.clientX - e.currentTarget.offsetLeft;
		const newCurrent = Math.ceil((max - min) * (mouseX / containerWidth));
		setCurrent(newCurrent);
	};

	useEffect(() => {
		if (!rating) setCurrent(min);
	}, [rating]);

	const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
		if (!rating) setCurrent(min);
	};

	const handleClick = (e: MouseEvent<HTMLDivElement>) => {
		setRating(current);
	};

	const template: any[] = Array(5).fill(0);
	let count = rating ?? current;

	return (
		<div className={styles.stars}>
			<div
				className={styles.stars__container}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				onClick={handleClick}
			>
				{template.map((_, index) => {
					if (count >= 1) {
						count--;
						return <StarSVG key={index} />;
					} else {
						return <EmptyStarSVG key={index} />;
					}
				})}
			</div>
		</div>
	);
};

export default SettableStars;
