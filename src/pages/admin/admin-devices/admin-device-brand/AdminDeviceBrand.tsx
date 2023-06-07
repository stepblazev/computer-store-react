import { ChangeEvent, FC, useEffect, useState } from 'react';
import Selector, { ISelectorOption } from '../../../../components/_UI/selector/Selector';
import useFetching from '../../../../hooks/useFetching';
import AdminService from '../../../../http/services/AdminService';
import { IBrand } from '../../../../models/filterModels';
import DropDown from '../../../../components/_UI/drop-down/DropDown';

type AdminDeviceBrandProps = {
	type: string;
	brand: string;
	setBrand: (brand: string) => any;
};

const AdminDeviceBrand: FC<AdminDeviceBrandProps> = ({ type, brand, setBrand }) => {
	const [showList, setShowList] = useState<boolean>(false);

	const [brands, setBrands] = useState<IBrand[]>([]);
	const [fetchBrands, isLoading, error] = useFetching(async () => {
		const response = await AdminService.getBrands(type, brand);
		setBrands(response.data);
	});

	useEffect(() => {
		fetchBrands();
	}, [type, brand]);

	const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setBrand(e.target.value);
		setShowList(true);
	};

	return (
		<div style={{ position: 'relative' }}>
			<input type='text' value={brand} onChange={inputHandler} style={{ width: '200px' }} />
			{showList && (
				<DropDown
					setValue={(brand: string) => {
						setBrand(brand);
						setShowList(false);
					}}
					values={brands.map((brand) => brand.name)}
				/>
			)}
		</div>
	);
};

export default AdminDeviceBrand;
