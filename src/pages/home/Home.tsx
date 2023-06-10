import { FC } from 'react';
import HomeBanner from './home-banner/HomeBanner';
import styles from './home.module.scss';
import Popular from '../../components/popular/Popular';
import HomeAbout from './home-about/HomeAbout';

const Home: FC = () => {
	return (
		<div className={[styles.home, 'container'].join(' ')}>
			<div className={styles.home__content}>
				<HomeBanner />
				<div className={styles.home__popular}>
					<Popular />
				</div>
				<HomeAbout />
			</div>
		</div>
	);
};

export default Home;
