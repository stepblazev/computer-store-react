import { FC, useState, useEffect } from 'react';
import AuthService from '../../http/services/AuthService';
import { VscEyeClosed as CrossSVG } from 'react-icons/vsc';
import styles from './admin.module.scss';

const Admin: FC = () => {
	const [access, setAcceess] = useState<boolean>(false);

	useEffect(() => {
		window.scrollTo({ top: 0 });

		const fetchAccess = async () => {
			await AuthService.admin();
			setAcceess(false);
		};

		fetchAccess().catch(() => {
			setAcceess(false);
		});
	}, []);

	return (
		<div className={[styles.admin, 'container'].join(' ')}>
			<h1>
				{access ? (
					<div className={styles.admin__content}></div>
				) : (
					<h1 className={styles.false}>
						<CrossSVG />
						<span>У вас недостаточно прав</span>
					</h1>
				)}
			</h1>
		</div>
	);
};

export default Admin;
