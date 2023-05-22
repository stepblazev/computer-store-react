import { FC, Fragment, useEffect } from 'react';
import Group from '../../../components/_UI/group/Group';
import ProfileName from './profile-name/ProfileName';
import ChangeAddress from './profile-address/ProfileAddress';
import LogoutButton from '../../../components/logout-button/LogoutButton';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchAccount } from '../../../redux/account/accountSlice';
import Loader from '../../../components/_UI/loader/Loader';
import styles from './profile-data.module.scss';
import ProfileSave from './profile-save/ProfileSave';

const ProfileData: FC = () => {
	const dispatch = useAppDispatch();

	const { isLoading } = useAppSelector((state) => state.account);

	useEffect(() => {
		dispatch(fetchAccount());
	}, []);

	return (
		<Group label='Ваш профиль'>
			<div className={styles.data}>
				{isLoading ? (
					<Loader />
				) : (
					<Fragment>
						<ProfileName />
						<ChangeAddress />
					</Fragment>
				)}
				<div className={styles.data__logout}>
					<ProfileSave />
					<LogoutButton />
				</div>
			</div>
		</Group>
	);
};

export default ProfileData;
