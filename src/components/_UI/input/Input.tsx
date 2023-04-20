import { FC, ChangeEvent, FocusEvent, MouseEvent, useRef } from 'react';
import styles from './input.module.scss';

type InputProps = {
	placeholder: string;
	type?: HTMLInputElement['type'];
	value?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
};

const Input: FC<InputProps> = ({ placeholder = 'Your text', ...otherProps }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const activate = (e: MouseEvent<HTMLDivElement>) => {
		inputRef.current?.focus();
	};

	return (
		<div className={styles.input} onClick={activate}>
			<input autoComplete='off' ref={inputRef} required {...otherProps} />
			<span className={styles.input__placeholder}>{placeholder}</span>
		</div>
	);
};

export default Input;
