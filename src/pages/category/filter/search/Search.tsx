import { ChangeEvent, FC } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { filterSlice } from '../../../../redux/filter/filterSlice';
import styles from '../filter.module.scss';

const Search: FC = () => {
	const dispatch = useAppDispatch();
	const { setSearch } = filterSlice.actions;

	const { search } = useAppSelector((state) => state.filter.filter);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearch(e.target.value));
	};

	return (
		<div className={styles.search}>
			<input placeholder='Название' value={search} onChange={onChange} />
		</div>
	);
};

export default Search;
