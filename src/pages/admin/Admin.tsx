import { FC, useState, useEffect } from 'react';
import AuthService from '../../http/services/AuthService';
import { VscEyeClosed as CrossSVG } from 'react-icons/vsc';
import styles from './admin.module.scss';
import AdminContent from './admin-content/AdminContent';

const Admin: FC = () => {
	const [access, setAcceess] = useState<boolean>(false);

	useEffect(() => {
		window.scrollTo({ top: 0 });

		const fetchAccess = async () => {
			await AuthService.admin();
			setAcceess(true);
		};

		fetchAccess().catch(() => {
			setAcceess(false);
		});
	}, []);

	return (
		<div className={[styles.admin, 'container'].join(' ')}>
			<div>
				<h1 className={styles.admin__title}>Панель администратора</h1>
				{access ? (
					<AdminContent />
				) : (
					<div className={styles.false}>
						<CrossSVG />
						<span>У вас недостаточно прав</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default Admin;
