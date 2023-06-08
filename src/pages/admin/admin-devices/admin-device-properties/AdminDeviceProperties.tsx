import { FC, useState, MouseEvent } from 'react';
import { IPropertyValue } from '../../../../models/filterModels';
import styles from './admin-device-properties.module.scss';
import Button from '../../../../components/_UI/button/Button';
import { IDeviceFull } from '../../../../models/deviceModels';
import PropertyName from './property-name/PropertyName';
import PropertyValue from './property-value/PropertyValue';
import AdminService from '../../../../http/services/AdminService';

type AdminDevicePropertiesProps = {
	device: IDeviceFull | null;
	setDevice: (newValue: any) => any;
};

const AdminDeviceProperties: FC<AdminDevicePropertiesProps> = ({ device, setDevice }) => {
	const [current, setCurrent] = useState<IPropertyValue>({ name: '', value: '' });

	const addHandler = (e: MouseEvent<HTMLButtonElement>) => {};

	if (!device) return null;

	return (
		<div className={styles.properties}>
			<div className={styles.properties__controls}>
				<PropertyName
					exceptions={device.properties.map((prop) => prop.name)}
					type={device.type}
					property={current.name}
					setProperty={(newProperty: string) =>
						setCurrent({ ...current, name: newProperty })
					}
				/>
				{current.name.trim().length > 0 && (
					<>
						<PropertyValue
							property={current.name}
							value={current.value}
							setValue={(newValue: string) =>
								setCurrent({ ...current, value: newValue })
							}
						/>
						{current.value.trim().length > 0 && (
							<Button label='Добавить' onClick={addHandler} />
						)}
					</>
				)}
			</div>
			{device.properties.map((prop) => (
				<div key={prop.name}>
					<span className={styles.table__cell}>{prop.name}</span>
					<input type='text' value={prop.value} />
					<button>Удалить</button>
				</div>
			))}
		</div>
	);
};

export default AdminDeviceProperties;
