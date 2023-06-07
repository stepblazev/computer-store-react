import { FC, useEffect, useState } from 'react';
import Selector, { ISelectorOption } from '../../../../components/_UI/selector/Selector';
import { IType } from '../../../../models/deviceModels';
import useFetching from '../../../../hooks/useFetching';
import AdminService from '../../../../http/services/AdminService';

type AdminDeviceTypeProps = {
	type: string;
	setType: (option: ISelectorOption<string>) => any;
};

const AdminDeviceType: FC<AdminDeviceTypeProps> = ({ type, setType }) => {
	const [types, setTypes] = useState<IType[]>([]);
	const [fetchTypes, isLoading, error] = useFetching(async () => {
		const response = await AdminService.getTypes();
		setTypes(response.data);
	});

	useEffect(() => {
		fetchTypes();
	}, []);

	return (
		<div>
			<Selector
				defaultValue={{ label: type, value: type }}
				onChange={setType}
				options={types.map((t) => ({ label: t.name, value: t.name }))}
				placeholder='Тип товара'
				isSearchable={true}
			/>
		</div>
	);
};

export default AdminDeviceType;
