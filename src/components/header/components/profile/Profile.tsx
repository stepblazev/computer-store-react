import { MdKeyboardDoubleArrowRight as LoginSVG } from 'react-icons/md';
import { FaUserCircle as ProfileSVG } from 'react-icons/fa';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/redux';
import styles from './profile.module.scss';

// FIXME исправить стили
const Profile: FC = () => {
	const { isAuth } = useAppSelector((state) => state.auth);

	return isAuth ? (
		<Link to='/profile' className={styles.profile}>
			<ProfileSVG className={styles.profile__svg} />
			<span className={styles.profile__title}>Профиль</span>
		</Link>
	) : (
		<Link to='/login' className={styles.profile}>
			<span className={styles.profile__title}>Войти</span>
			<LoginSVG className={styles.profile__svg} />
		</Link>
	);
};

export default Profile;
