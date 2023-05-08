import { FC } from 'react';
import { IBrand } from '../../../../models/filterModels';
import styles from '../filter.module.scss';
import BrandItem from './BrandItem';

type BrandsProps = {
	brands: IBrand[];
};

const Brands: FC<BrandsProps> = ({ brands }) => {
	return (
		<div className={styles.property}>
			<h3>Производитель</h3>
			<ul>
				{brands.map((brand) => (
					<BrandItem key={brand.id} brand={brand.name} />
				))}
			</ul>
		</div>
	);
};

export default Brands;
