import { FC, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { logoutUser } from '../../redux/auth/authSlice';

const Logout: FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(logoutUser());
	}, []);

	return <></>;
};

export default Logout;
