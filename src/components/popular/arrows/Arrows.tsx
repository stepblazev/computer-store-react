import { FC, MouseEvent } from 'react';
import styles from './arrows.module.scss';

type ArrowProps = {
	className: string;
	style: any;
	onClick: (e: MouseEvent<HTMLButtonElement>) => any;
};

export const PrevArrow: FC<ArrowProps> = (props) => {
	return <button {...props}>Назад</button>;
};

export const NextArrow: FC<ArrowProps> = (props) => {
	return <button {...props}>Вперед</button>;
};
