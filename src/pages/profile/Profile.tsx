import { FC } from 'react';
import styles from './profile.module.scss';
import ChangeAddress from '../../components/change-address/ChangeAddress';
import { Link } from 'react-router-dom';

const Profile: FC = () => {
	return (
		<div className={[styles.profile, 'container'].join(' ')}>
			<div className={styles.profile__content}>
				<ChangeAddress />
				<Link to='/logout'>Выйти из аккаунта</Link>
			</div>
		</div>
	);
};

export default Profile;
