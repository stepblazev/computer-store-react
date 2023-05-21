import { FC, ReactNode } from 'react';
import styles from './group.module.scss';

type GroupProps = {
	label: string;
	children: ReactNode;
};

const Group: FC<GroupProps> = ({ label, children }) => {
	return (
		<div className={styles.group}>
			<h2 className={styles.group__label}>{label}</h2>
			{children}
		</div>
	);
};

export default Group;
