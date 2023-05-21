import { FC, MouseEvent } from 'react';
import { GiSave as SaveSVG } from 'react-icons/gi';
import styles from './save-button.module.scss';

type SaveButtonProps = {
	label?: string;
	onClick: (e: MouseEvent<HTMLButtonElement>) => any;
};

const SaveButton: FC<SaveButtonProps> = ({ label = 'Сохранить изменения', onClick }) => {
	return (
		<button onClick={onClick} className={styles.save}>
			<SaveSVG />
			<span>{label}</span>
		</button>
	);
};

export default SaveButton;
