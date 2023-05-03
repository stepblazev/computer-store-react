import { BiSearchAlt as SearchSVG } from 'react-icons/bi';
import { ChangeEvent, FC, useEffect, useState, FocusEvent } from 'react';
import styles from './search.module.scss';
import SearchResult from '../search-result/SearchResult';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchSearch } from '../../../../redux/search/searchSlice';
import useDebounce from '../../../../hooks/useDebounce';

const Search: FC = () => {
	const dispatch = useAppDispatch();

	const [search, setSearch] = useState<string>('');
	const debounceSearch = useDebounce(search, 500);

	useEffect(() => {
		if (debounceSearch.length > 0) dispatch(fetchSearch(debounceSearch));
	}, [debounceSearch]);

	const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
		setSearch('');
	};

	return (
		<div className={styles.search}>
			<input
				type='text'
				value={search}
				onChange={searchHandler}
				onBlur={blurHandler}
				placeholder='Поиск по каталогу'
				className={styles.search__input}
			/>
			<SearchSVG className={styles.search__svg} />
			{Boolean(search.length) && <SearchResult />}
		</div>
	);
};

export default Search;
