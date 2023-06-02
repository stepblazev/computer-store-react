import { FC, useEffect } from 'react';
import Layout from './components/Layout';
import Router from './router/Router';
import { BrowserRouter } from 'react-router-dom';
import { useAppDispatch } from './hooks/redux';
import { refreshUser } from './redux/auth/authSlice';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// FIXME вынести все использованные svg в отдельный файл
const App: FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (localStorage.getItem('token')) dispatch(refreshUser());
	}, []);

	return (
		<BrowserRouter>
			<Layout>
				<Router />
			</Layout>
		</BrowserRouter>
	);
};

export default App;
