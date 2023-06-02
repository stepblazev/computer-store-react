import { FC } from 'react';
import ProfileData from './profile-data/ProfileData';
import ProfileOrders from './profile-orders/ProfileOrders';
import styles from './profile.module.scss';
import Popular from '../../components/popular/Popular';

const Profile: FC = () => {
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
