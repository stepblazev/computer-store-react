import { FC } from 'react';
import HomeBanner from './home-banner/HomeBanner';
import styles from './home.module.scss';
import Popular from '../../components/popular/Popular';

const Home: FC = () => {
	return (
		<div className={[styles.home, 'container'].join(' ')}>
			<div className={styles.home__content}>
				<HomeBanner />
				<Popular />
			</div>
		</div>
	);
};

export default Home;
