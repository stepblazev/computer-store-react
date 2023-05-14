import { FC } from 'react';
import styles from './counter.module.scss';

type CounterProps = {
	from?: number;
	to?: number;
	step?: number;
	current: number;
	onChange: (newValue: number) => any;
};

const Counter: FC<CounterProps> = ({ current, onChange, from = 1, to = 100, step = 1 }) => {
	const allowDec = current - step >= from;
	const allowInc = current + step <= to;

	const decrease = (): void => {
		if (!allowDec) return console.log('Достигнут минимум');
		onChange(current - step);
	};

	const increase = (): void => {
		if (!allowInc) return console.log('Достигнут максимум');
		onChange(current + step);
	};

	return (
		<div className={styles.counter}>
			<span
				className={
					allowDec
						? styles.counter__decrease
						: [styles.counter__decrease, styles.counter__decreaseNot].join(' ')
				}
				onClick={decrease}
			>
				-
			</span>
			<span className={styles.counter__value}>{current}</span>
			<span
				className={
					allowInc
						? styles.counter__increase
						: [styles.counter__increase, styles.counter__increaseNot].join(' ')
				}
				onClick={increase}
			>
				+
			</span>
		</div>
	);
};

export default Counter;
