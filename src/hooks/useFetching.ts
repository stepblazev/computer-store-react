import { useState } from 'react';

export default function useFetching(callback: () => any) {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const execute = async () => {
		try {
			setLoading(true);
			await callback();
		} catch (error: any) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	return [execute, loading, error] as const;
}
