import { FC } from 'react';
import styles from './profile.module.scss';
import ChangeAddress from '../../components/user/change-address/ChangeAddress';

const Profile: FC = () => {
	return (
		<div className={[styles.profile, 'container'].join(' ')}>
			<div className={styles.profile__content}></div>
		</div>
	);
};

export default Profile;
