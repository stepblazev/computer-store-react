import { FC, useEffect, useRef, MouseEvent } from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import DeviceList from './device-list/DeviceList';
import styles from './search-result.module.scss';
import TypeList from './type-list/TypeList';

type SearchResultsProps = {
	hideResults: () => void;
};

const SearchResult: FC<SearchResultsProps> = ({ hideResults }) => {
	const searchRef = useRef<HTMLDivElement>(null);

	const { types, devices, isLoading, error } = useAppSelector((state) => state.search);

	useEffect(() => {
		const handleOutsideClick = (event: any) => {
			if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
				hideResults();
			}
		};
		document.addEventListener('click', handleOutsideClick);
		return () => document.removeEventListener('click', handleOutsideClick);
	}, [searchRef]);

	return (
		<div className={styles.result} ref={searchRef}>
			<TypeList types={types} hideResults={hideResults} />
			<DeviceList devices={devices} hideResults={hideResults} />
			{Boolean(error) && <h3 className={styles.result__error}>{error}</h3>}
		</div>
	);
};

export default SearchResult;
