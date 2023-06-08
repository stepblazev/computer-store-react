import { FC, ChangeEvent, useState, useEffect } from 'react';
import DropDown from '../../../../../components/_UI/drop-down/DropDown';
import useFetching from '../../../../../hooks/useFetching';
import AdminService from '../../../../../http/services/AdminService';
import Input from '../../../../../components/_UI/input/Input';
import { IPropertyValue } from '../../../../../models/deviceModels';

type PropertyValueProps = {
	property: string;
	value: string;
	setValue: (value: string) => any;
};

const PropertyValue: FC<PropertyValueProps> = ({ property, value, setValue }) => {
	const [showList, setShowList] = useState<boolean>(false);

	const [values, setValues] = useState<IPropertyValue[]>([]);
	const [fetchValues, isLoading, error] = useFetching(async () => {
		const response = await AdminService.getValues(property.trim(), value.trim());
		setValues(response.data);
	});

	useEffect(() => {
		if (value.length === 0) {
			setShowList(false);
			setValues([]);
			return;
		}
		fetchValues();
	}, [value]);

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		setShowList(true);
	};

	return (
		<div style={{ position: 'relative' }}>
			<Input placeholder='Значение' value={value} onChange={changeHandler} />
			{showList && !isLoading && (
				<DropDown
					values={values.map((val) => val.value)}
					setValue={(newValue) => {
						setValue(newValue.trim());
						setShowList(false);
					}}
				/>
			)}
		</div>
	);
};

export default PropertyValue;
