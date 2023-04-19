import { FC, ChangeEvent, MouseEvent, useRef } from 'react';
import styles from './input.module.scss';

type InputProps = {
	type?: HTMLInputElement['type'];
	placeholder: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<InputProps> = ({
	type = 'text',
	placeholder = 'Your text',
	value,
	onChange,
}) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const activate = (e: MouseEvent<HTMLDivElement>) => {
		inputRef.current?.focus();
	};

	return (
		<div className={styles.input} data-place={placeholder} onClick={activate}>
			<input
				type={type}
				value={value}
				onChange={onChange}
				autoComplete='off'
				ref={inputRef}
			/>
		</div>
	);
};

export default Input;
