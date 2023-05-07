import { FC, ChangeEvent, useState } from 'react';
import Checkbox from '../../../../components/_UI/checkbox/Checkbox';
import { useAppDispatch } from '../../../../hooks/redux';
import { IPropertyValue } from '../../../../models/filterModels';
import { filterSlice } from '../../../../redux/filter/filterSlice';

type PropertyItem = {
	property: IPropertyValue;
};

const PropertyItem: FC<PropertyItem> = ({ property }) => {
	const dispatch = useAppDispatch();
	const { addProperty, removeProperty } = filterSlice.actions;

	const [checked, setChecked] = useState<boolean>(false);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (checked) {
			dispatch(removeProperty(property));
			setChecked(false);
		} else {
			dispatch(addProperty(property));
			setChecked(true);
		}
	};

	return (
		<li>
			<Checkbox label={property.value} checked={checked} onChange={onChange} />
		</li>
	);
};

export default PropertyItem;
