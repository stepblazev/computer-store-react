import { FC } from 'react';
import Pagination from '../../../../components/_UI/pagination/Pagination';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { filterSlice } from '../../../../redux/filter/filterSlice';

const DevicePagination: FC = () => {
	const dispatch = useAppDispatch();
	const { setPage } = filterSlice.actions;

	const { page } = useAppSelector((state) => state.filter.filter);
	const { total } = useAppSelector((state) => state.devices);

	const pageHandler = (page: number) => {
		dispatch(setPage(page));
	};

	return <Pagination total={total} current={page} setPage={pageHandler} />;
};

export default DevicePagination;
