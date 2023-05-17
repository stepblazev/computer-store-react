import { FC, useState, useEffect, ChangeEvent } from 'react';
import useFetching from '../../hooks/useFetching';
import useDebounce from '../../hooks/useDebounce';
import { IAddress } from '../../models/addressModels';
import AddressService from '../../http/services/AddressService';
import styles from './change-address.module.scss';

// FIXME доработать
const ChangeAddress: FC = () => {
	const [query, setQuery] = useState<string>('');
	const [addresses, setAddresses] = useState<IAddress[]>([]);

	const debounceQuery = useDebounce(query, 1000);

	const [fetchAddress, isLoading, error] = useFetching(async () => {
		const response = await AddressService.getAddress(query);
		setAddresses(response.data.suggestions);
	});

	useEffect(() => {
		fetchAddress();
	}, [debounceQuery]);

	return (
		<div className={styles.address}>
			<input
				type='text'
				value={query}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
			/>
			{addresses.length > 0 && (
				<ul>
					{addresses.map((address) => (
						<li key={address.value}>
							{address.data.city_type}. {address.data.city},{' '}
							{address.data.street_type}. {address.data.street}{' '}
							{address.data.house ? `, д. ${address.data.house}` : ''}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default ChangeAddress;
