import { FC, ChangeEvent, MouseEvent, useState } from 'react';
import Input from '../../../../components/_UI/input/Input';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { accountSlice } from '../../../../redux/account/accountSlice';
import AddressList from './address-list/AddressList';
import styles from './profile-address.module.scss';

const ProfileAddress: FC = () => {
	const dispatch = useAppDispatch();
	const { setAddress } = accountSlice.actions;

	const [showList, setShowList] = useState<boolean>(false);

	const { address, showSave } = useAppSelector((state) => state.account);

	const clickHandler = (e: MouseEvent<HTMLElement>) => {
		const target = e.target as HTMLLIElement;
		dispatch(setAddress(target.textContent ?? ''));
		setShowList(false);
	};

	const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setAddress(e.target.value));
		setShowList(true);
	};

	return (
		<div className={styles.address}>
			<Input placeholder='Адрес' value={address ?? ''} onChange={inputHandler} />
			{showList && <AddressList query={address ?? ''} onClick={clickHandler} />}
		</div>
	);
};

export default ProfileAddress;
