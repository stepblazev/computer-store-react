import { FC } from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import Loader from '../../../_UI/loader/Loader';
import DeviceList from './device-list/DeviceList';
import styles from './search-result.module.scss';
import TypeList from './type-list/TypeList';

const SearchResult: FC = () => {
	const { types, devices, isLoading, error } = useAppSelector((state) => state.search);

	return (
		<div className={styles.result}>
			{isLoading ? (
				<Loader />
			) : (
				!types.length &&
				!devices.length && (
					<h3 className={styles.result__nothing}>Поиск не дал результатов</h3>
				)
			)}
			<TypeList types={types} />
			<DeviceList devices={devices} />
			{Boolean(error) && <h3 className={styles.result__error}>{error}</h3>}
		</div>
	);
};

export default SearchResult;
