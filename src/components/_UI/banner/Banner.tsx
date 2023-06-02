import { FC } from 'react';
import styles from './banner.module.scss';

const Banner: FC = () => {
	return (
		<div className={styles.banner}>
			<div className={styles.banner__image}>
				<img src='https://invasion.ru/images/5e775b6a1f451576027640.jpg' />
			</div>
		</div>
	);
};

export default Banner;
