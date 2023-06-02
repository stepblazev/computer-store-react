import { FC } from 'react';
import { BsArrowRightSquareFill as ArrowSVG } from 'react-icons/bs';
import styles from './arrows.module.scss';

export const PrevArrow: FC<any> = ({ onClick }) => {
	return (
		<button className={[styles.arrow, styles.prev].join(' ')} onClick={onClick}>
			<ArrowSVG />
		</button>
	);
};

export const NextArrow: FC<any> = ({ onClick }) => {
	return (
		<button className={[styles.arrow, styles.next].join(' ')} onClick={onClick}>
			<ArrowSVG />
		</button>
	);
};
