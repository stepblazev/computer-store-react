import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RiLogoutBoxRLine as LogoutSVG } from 'react-icons/ri';
import styles from './logout-button.module.scss';

const LogoutButton: FC = () => {
	return (
		<Link className={styles.logout} to='/logout'>
			<LogoutSVG />
			Выйти из аккаунта
		</Link>
	);
};

export default LogoutButton;
