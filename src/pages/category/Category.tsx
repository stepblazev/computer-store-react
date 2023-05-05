import { FC } from 'react';
import { useLocation } from 'react-router-dom';

const Category: FC = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const type = params.get('type');

	return (
		<div className='container'>
			<h1 style={{ textAlign: 'center', margin: '20px' }}>{type}</h1>
		</div>
	);
};

export default Category;
