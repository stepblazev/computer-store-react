import { FC } from 'react';
import styles from './drop-down.module.scss';

type DropDownProps = {
	values: string[];
	setValue: (value: string) => any;
};

const DropDown: FC<DropDownProps> = ({ values, setValue }) => {
	if (values.length === 0) return null;

	return (
		<ul className={styles.drop}>
			{values.map((value) => (
				<li key={value} className={styles.drop__item} onClick={() => setValue(value)}>
					{value}
				</li>
			))}
		</ul>
	);
};

export default DropDown;
