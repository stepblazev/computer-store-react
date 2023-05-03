import { useState, useEffect } from 'react';

const useDebounce = (value: any, delay: number) => {
	const [debounceValue, setDebounceValue] = useState<any>(value);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebounceValue(value);
		}, delay);

		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);

	return debounceValue;
};

export default useDebounce;
