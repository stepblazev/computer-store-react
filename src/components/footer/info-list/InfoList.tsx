import { FC } from 'react';
import styles from './info-list.module.scss';

type InfoListProps = {
	title: string;
	text: string;
};

const InfoList: FC<InfoListProps> = ({ title, text }) => {
	return (
		<div className={styles.column}>
			<h3 className={styles.column__title}>{title}</h3>
			<p className={styles.column__text}>{text}</p>
		</div>
	);
};

export default InfoList;
