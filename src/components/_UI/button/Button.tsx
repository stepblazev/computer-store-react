import { FC, MouseEvent } from 'react';
import styles from './button.module.scss';

type ButtonType = 'button' | 'submit' | 'reset';

type ButtonProps = {
	caption: string;
	type?: ButtonType;
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<ButtonProps> = ({ caption, type = 'button', ...otherProps }) => {
	return (
		<button className={styles.button} type={type} {...otherProps}>
			{caption}
		</button>
	);
};

export default Button;
