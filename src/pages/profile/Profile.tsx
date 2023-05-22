import { FC } from 'react';
import styles from './profile.module.scss';
import ProfileData from './profile-data/ProfileData';
import ProfileOrders from './profile-orders/ProfileOrders';

const Profile: FC = () => {
	return (
		<div className={[styles.profile, 'container'].join(' ')}>
			<div className={styles.profile__content}>
				<ProfileData />
				<ProfileOrders />
			</div>
		</div>
	);
};

export default Profile;
