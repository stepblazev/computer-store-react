import { BiSearchAlt as SearchSVG } from 'react-icons/bi';
import { FC } from 'react';
import styles from './search.module.scss';

const Search: FC = () => {
	return (
		<div className={styles.search}>
			<input
				type='text'
				placeholder='Поиск по каталогу'
				className={styles.search__input}
			/>
			<SearchSVG className={styles.search__svg} />
			{/* <button className={styles.search__button}>Поиск</button> */}
		</div>
	);
};

export default Search;
