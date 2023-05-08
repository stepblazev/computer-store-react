import { FC, ChangeEvent, useState } from 'react';
import Checkbox from '../../../../components/_UI/checkbox/Checkbox';
import { useAppDispatch } from '../../../../hooks/redux';
import { filterSlice } from '../../../../redux/filter/filterSlice';

type BrandItemProps = {
	brand: string;
};

const BrandItem: FC<BrandItemProps> = ({ brand }) => {
	const dispatch = useAppDispatch();
	const { addBrand, removeBrand } = filterSlice.actions;

	const [checked, setChecked] = useState<boolean>(false);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (checked) {
			dispatch(removeBrand(brand));
			setChecked(false);
		} else {
			dispatch(addBrand(brand));
			setChecked(true);
		}
	};

	return (
		<li>
			<Checkbox label={brand} checked={checked} onChange={onChange} />
		</li>
	);
};

export default BrandItem;
