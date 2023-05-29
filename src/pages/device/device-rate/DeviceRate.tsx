import { FC, useState, useEffect } from 'react';
import { IRate } from '../../../models/deviceModels';
import useFetching from '../../../hooks/useFetching';
import RateService from '../../../http/services/RateService';
import RateList from '../rate-list/RateList';
import styles from './device-rate.module.scss';
import Pagination from '../../../components/_UI/pagination/Pagination';
import { RATE_LIMIT } from '../../../_config';

type DeviceRateProps = {
	id: number;
	rating: number;
	rating_count: number;
};

const DeviceRate: FC<DeviceRateProps> = ({ id, rating, rating_count }) => {
	const [page, setPage] = useState<number>(1);

	const [rates, setRates] = useState<IRate[]>([]);
	const [fetchRates, isLoading, error] = useFetching(async () => {
		const response = await RateService.getRates(id, page);
		setRates(response.data);
	});

	useEffect(() => {
		fetchRates();
	}, [page]);

	if (rates.length === 0) return null;

	return (
		<div className={styles.rate}>
			<p className={styles.rate__title}>
				Отзывы ({rating_count})
				<span className={styles.rate__titleValue}>{rating.toFixed(1)} из 5</span>
			</p>
			<RateList rates={rates} />
			<Pagination total={rating_count} current={page} setPage={setPage} limit={RATE_LIMIT} />
		</div>
	);
};

export default DeviceRate;
