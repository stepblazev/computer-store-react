import { ChangeEvent, FC } from 'react';
import Input from '../../../../components/_UI/input/Input';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { accountSlice } from '../../../../redux/account/accountSlice';
import styles from './profile-name.module.scss';

const ProfileName: FC = () => {
	const dispatch = useAppDispatch();
	const { setName } = accountSlice.actions;

	const { name } = useAppSelector((state) => state.account);

	const handler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setName(e.target.value));
	};

	return (
		<div className={styles.name}>
			<Input value={name ?? ''} onChange={handler} placeholder='Имя' />
		</div>
	);
};

export default ProfileName;
