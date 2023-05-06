import { BiSearchAlt as SearchSVG } from 'react-icons/bi';
import { ChangeEvent, FC, useEffect, useState, FocusEvent } from 'react';
import SearchResult from '../search-result/SearchResult';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchSearch } from '../../../../redux/search/searchSlice';
import { searchSlice } from '../../../../redux/search/searchSlice';
import useDebounce from '../../../../hooks/useDebounce';
import styles from './search.module.scss';

const Search: FC = () => {
	const dispatch = useAppDispatch();
	const { searchClear } = searchSlice.actions;

	const [showResults, setShowResults] = useState<boolean>(false);

	const [search, setSearch] = useState<string>('');
	const debounceSearch = useDebounce(search, 300);

	useEffect(() => {
		if (debounceSearch.length > 0) {
			setShowResults(true);
			dispatch(fetchSearch(debounceSearch));
		} else dispatch(searchClear());
	}, [debounceSearch]);

	useEffect(() => {
		if (!showResults) dispatch(searchClear());
	}, [showResults]);

	const searchHandler = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
	const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
		setShowResults(false);
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
			{showResults && <SearchResult />}
		</div>
	);
};

export default Search;
