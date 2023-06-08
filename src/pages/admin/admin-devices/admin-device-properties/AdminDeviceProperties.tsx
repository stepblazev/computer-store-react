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
	fetchDevice: () => any;
};

const AdminDeviceProperties: FC<AdminDevicePropertiesProps> = ({ device, fetchDevice }) => {
	const [current, setCurrent] = useState<IPropertyValue>({ name: '', value: '' });

	const addHandler = async (e: MouseEvent<HTMLButtonElement>) => {
		if (!device) return;
		await AdminService.postProperty(
			device.id,
			current.name.trim(),
			current.value.trim(),
			device.type
		);
		fetchDevice();
	};

	const deleteHandler = async (property: string) => {
		if (!device || !confirm('Удалить параметр?')) return;
		await AdminService.deleteProperty(device.id, property);
		fetchDevice();
	};

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
			<div>
				{device.properties.map((prop) => (
					<div key={prop.name} className={styles.property}>
						<b style={{ minWidth: '300px' }}>{prop.name}</b>
						<span style={{ minWidth: '200px' }}>{prop.value}</span>
						<button onClick={() => deleteHandler(prop.name)}>Удалить</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default AdminDeviceProperties;
