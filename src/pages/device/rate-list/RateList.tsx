import { FC } from 'react';
import { IRate } from '../../../models/deviceModels';
import styles from './rate-list.module.scss';
import Stars from '../../../components/_UI/stars/Stars';
import SlideIn, { SlideInDirections } from '../../../animations/SlideIn';
import { getDateFromSQLString } from '../../../utils/utils';

type RateListProps = {
	rates: IRate[];
};

const RateList: FC<RateListProps> = ({ rates }) => {
	return (
		<ul className={styles.list}>
			{rates.map((rate, index) => (
				<SlideIn key={rate.id} direction={SlideInDirections.TOP} delay={index * 100}>
					<li className={styles.list__item}>
						<div className={styles.list__itemTitle}>
							<Stars rating={rate.rate} />
							<span>{getDateFromSQLString(rate.created_at)}</span>
						</div>
						<p className={styles.list__itemMessage}>{rate.message}</p>
					</li>
				</SlideIn>
			))}
		</ul>
	);
};

export default RateList;
