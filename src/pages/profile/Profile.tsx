import { FC } from 'react';
import ChangeAddress from '../../components/change-address/ChangeAddress';
import Group from '../../components/_UI/group/Group';
import ProfileName from './profile-name/ProfileName';
import LogoutButton from '../../components/logout-button/LogoutButton';
import styles from './profile.module.scss';

const Profile: FC = () => {
	return (
		<div className={[styles.profile, 'container'].join(' ')}>
			<div className={styles.profile__content}>
				<Group label='Ваш профиль'>
					<div className={styles.profile__account}>
						<ProfileName />
						<ChangeAddress />
						<div className={styles.profile__accountLogout}>
							<LogoutButton />
						</div>
					</div>
				</Group>
				<Group label='Список заказов'>
					<i>Здесь будет список заказов</i>
				</Group>
			</div>
		</div>
	);
};

export default Profile;
