import { FC, useEffect } from 'react';
import ProfileData from './profile-data/ProfileData';
import ProfileOrders from './profile-orders/ProfileOrders';
import styles from './profile.module.scss';
import Popular from '../../components/popular/Popular';

const Profile: FC = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
		});
	}, []);

	return (
		<div className={[styles.profile, 'container'].join(' ')}>
			<div className={styles.profile__content}>
				<ProfileData />
				<ProfileOrders />
				<Popular />
			</div>
		</div>
	);
};

export default Profile;
