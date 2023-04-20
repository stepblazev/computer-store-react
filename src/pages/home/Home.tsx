import { FC } from 'react';
import { useAppSelector } from '../../hooks/redux';

const Home: FC = () => {
	const { isAuth, email } = useAppSelector((state) => state.auth);

	return (
		<div className='container'>
			<h1 style={{ textAlign: 'center', padding: '20px' }}>
				Интернет-магазин | Главная страница
			</h1>
			<h2 style={{ textAlign: 'center', padding: '20px', fontSize: '24px' }}>
				{isAuth ? `Вы авторизированы ${email}` : 'Вы не авторизированы'}
			</h2>
		</div>
	);
};

export default Home;
