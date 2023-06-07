import { FC, useState } from 'react';
import { IPropertyValue } from '../../../../models/filterModels';
import styles from './admin-device-properties.module.scss';
import Button from '../../../../components/_UI/button/Button';

type AdminDevicePropertiesProps = {
	id: number;
	properties: IPropertyValue[];
};

const AdminDeviceProperties: FC<AdminDevicePropertiesProps> = ({ id, properties }) => {
	const [current, setCurrent] = useState<IPropertyValue>({ name: '', value: '' });

	return (
		<div className={styles.properties}>
			<div className={styles.properties__controls}>
				<input type='text' />
				<input type='text' />
				<Button label='Добавить' />
			</div>
			<table className={styles.table}>
				<thead>
					<tr>
						<th className={styles.table__cell}>Название</th>
						<th className={styles.table__cell}>Значение</th>
					</tr>
				</thead>
				<tbody>
					{properties.map((prop) => (
						<tr key={prop.name}>
							<td className={styles.table__cell}>{prop.name}</td>
							<td className={styles.table__cell}>{prop.value}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AdminDeviceProperties;
