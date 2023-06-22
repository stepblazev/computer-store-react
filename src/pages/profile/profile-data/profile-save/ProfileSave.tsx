import { FC } from 'react';
import SaveButton from '../../../../components/_UI/save-button/SaveButton';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { fetchNewData } from '../../../../redux/account/accountSlice';
import { notificationSlice } from '../../../../redux/notifications/notificationSlice';
import { saveWarning } from '../../../../warnings/profileWarning';

const ProfileSave: FC = () => {
	const dispatch = useAppDispatch();
	const { addNotification } = notificationSlice.actions;
	const { name, address, showSave } = useAppSelector((state) => state.account);

	if (!showSave) return null;

	const save = () => {
		dispatch(fetchNewData(name ?? '', address ?? ''));
		dispatch(addNotification(saveWarning));
	};

	return <SaveButton onClick={save} />;
};

export default ProfileSave;
