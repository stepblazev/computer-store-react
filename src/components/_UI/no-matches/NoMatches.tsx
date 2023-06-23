import { FC } from 'react';
import { AiOutlineFrown as NoMatchesSVG } from 'react-icons/ai';
import styles from './no-matches.module.scss';

type NoMatchesProps = {
	label?: string;
};

const NoMatches: FC<NoMatchesProps> = ({ label = 'Совпадений не найдено' }) => {
	return (
		<div className={styles.nomatches}>
			{/* <NoMatchesSVG /> */}
			<h2 className={styles.nomatches__label}>{label}</h2>
		</div>
	);
};
export default NoMatches;
