import { FC, MouseEvent } from 'react';
import styles from './button.module.scss';

type ButtonType = 'button' | 'submit' | 'reset';

type ButtonProps = {
	label: string;
	type?: ButtonType;
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<ButtonProps> = ({ label, type = 'button', ...otherProps }) => {
	return (
		<button className={styles.button} type={type} {...otherProps}>
			{label}
		</button>
	);
};

export default Button;
