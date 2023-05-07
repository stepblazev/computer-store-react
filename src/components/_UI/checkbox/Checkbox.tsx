import { ChangeEvent, FC } from 'react';
import { BsCheck2 as CheckedSVG } from 'react-icons/bs';
import styles from './checkbox.module.scss';

type CheckboxType = {
	label: string;
	checked: boolean;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: FC<CheckboxType> = ({ label, checked = false, onChange }) => {
	return (
		<label className={styles.checkbox}>
			<div className={styles.checkbox__icon}>{checked && <CheckedSVG />}</div>
			<input type='checkbox' checked={checked} onChange={onChange} />
			<span className={styles.checkbox__label}>{label}</span>
		</label>
	);
};

export default Checkbox;
