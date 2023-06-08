import { FC, ChangeEvent, useState, useEffect } from 'react';
import DropDown from '../../../../../components/_UI/drop-down/DropDown';
import useFetching from '../../../../../hooks/useFetching';
import AdminService from '../../../../../http/services/AdminService';
import { IPropertyName } from '../../../../../models/deviceModels';
import Input from '../../../../../components/_UI/input/Input';

type PropertyNameProps = {
	type: string;
	property: string;
	exceptions: string[];
	setProperty: (property: string) => any;
};

const PropertyName: FC<PropertyNameProps> = ({ type, property, setProperty, exceptions }) => {
	const [showList, setShowList] = useState<boolean>(false);

	const [properties, setProperties] = useState<IPropertyName[]>([]);
	const [fetchProperties, isLoading, error] = useFetching(async () => {
		const response = await AdminService.getProperties(type, property.trim());
		const properties = response.data.filter((prop) => !exceptions.includes(prop.name));
		setProperties(properties);
	});

	useEffect(() => {
		if (property.length === 0) {
			setShowList(false);
			setProperties([]);
			return;
		}
		fetchProperties();
	}, [property]);

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setProperty(e.target.value);
		setShowList(true);
	};

	return (
		<div style={{ position: 'relative' }}>
			<Input placeholder='Новый параметр' value={property} onChange={changeHandler} />
			{showList && !isLoading && (
				<DropDown
					values={properties.map((prop) => prop.name)}
					setValue={(value) => {
						setProperty(value.trim());
						setShowList(false);
					}}
				/>
			)}
		</div>
	);
};

export default PropertyName;
