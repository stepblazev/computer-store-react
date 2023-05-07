import { FC } from 'react';
import PropertyItem from './PropertyItem';
import { IProperty } from '../../../../models/filterModels';
import styles from '../filter.module.scss';

type PropertyType = {
	property: IProperty;
};

const Property: FC<PropertyType> = ({ property }) => {
	return (
		<div className={styles.property}>
			<h3>{property.property_name}</h3>
			<ul>
				{property.property_values.map((value) => (
					<PropertyItem property={{ name: property.property_name, value }} />
				))}
			</ul>
		</div>
	);
};

export default Property;
