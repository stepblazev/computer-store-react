import { FC } from 'react';
import SaveButton from '../../../../components/_UI/save-button/SaveButton';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { fetchNewData } from '../../../../redux/account/accountSlice';

const ProfileSave: FC = () => {
	const dispatch = useAppDispatch();
	const { name, address, showSave } = useAppSelector((state) => state.account);

	if (!showSave) return null;

	const save = () => {
		dispatch(fetchNewData(name ?? '', address ?? ''));
	};

	return <SaveButton onClick={save} />;
};

export default ProfileSave;
