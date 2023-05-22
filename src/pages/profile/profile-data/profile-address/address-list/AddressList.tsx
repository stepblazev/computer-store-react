import { FC, useState, MouseEvent, useEffect } from 'react';
import { IAddress } from '../../../../../models/addressModels';
import useFetching from '../../../../../hooks/useFetching';
import AddressService from '../../../../../http/services/AddressService';
import useDebounce from '../../../../../hooks/useDebounce';
import styles from './addres-list.module.scss';

type AddressListProps = {
	query: string;
	onClick: (e: MouseEvent<HTMLElement>) => any;
};

const AddressList: FC<AddressListProps> = ({ query, onClick }) => {
	const [addresses, setAddresses] = useState<IAddress[]>([]);

	const debounceQuery = useDebounce(query, 0);

	const [fetchAddress, isLoading, error] = useFetching(async () => {
		const response = await AddressService.getAddress(query ?? '');
		console.log(response.data.suggestions);

		setAddresses(response.data.suggestions);
	});

	useEffect(() => {
		fetchAddress();
	}, [debounceQuery]);

	const clickHandler = (e: MouseEvent<HTMLElement>) => {
		onClick(e);
		setAddresses([]);
	};

	return (
		<ul className={styles.list}>
			{addresses.map((address) => (
				<li key={address.value} onClick={clickHandler}>
					{address.data.city_type}. {address.data.city}, {address.data.street_type}.{' '}
					{address.data.street}
					{address.data.house
						? `, ${address.data.house_type}. ${address.data.house}`
						: ''}
				</li>
			))}
		</ul>
	);
};

export default AddressList;
