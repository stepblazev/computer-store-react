import { FC, MouseEvent } from 'react';
import styles from './button.module.scss';

type ButtonProps = {
	caption: string;
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<ButtonProps> = ({ caption, ...otherProps }) => {
	return (
		<button className={styles.button} {...otherProps}>
			{caption}
		</button>
	);
};

export default Button;
