import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ComponentLinks } from '../../../components/header/navLinks';
import styles from './home-banner.module.scss';
import Banner from '../../../components/_UI/banner/Banner';

const HomeBanner: FC = () => {
	return (
		<div className={styles.banner}>
			<ul className={styles.banner__components}>
				{ComponentLinks.map((link) => (
					<li key={link.label}>
						<Link to={link.endpoint}>{link.label}</Link>
					</li>
				))}
			</ul>
			<div className={styles.banner__banner}>
				<Banner />
			</div>
		</div>
	);
};

export default HomeBanner;
