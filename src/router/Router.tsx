import { RouteProps as BaseRouteProps, Navigate, Route, Routes } from 'react-router-dom';
import { FC } from 'react';
import { useAppSelector } from '../hooks/redux';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Logout from '../pages/logout/Logout';
import Registration from '../pages/registration/Registration';
import Category from '../pages/category/Category';

type RouteProps = BaseRouteProps & {
	element: React.ReactNode;
};

const publicRoutes: RouteProps[] = [
	{ path: '/', element: <Home /> },
	{ path: '/login', element: <Login /> },
	{ path: '/registration', element: <Registration /> },
	{ path: '/device', element: <Category /> },
];

const privateRoutes: RouteProps[] = [
	{ path: '/', element: <Home /> },
	{ path: '/logout', element: <Logout /> },
	{ path: '/device', element: <Category /> },
];

const Router: FC = () => {
	const { isAuth } = useAppSelector((state) => state.auth);

	return (
		<Routes>
			{(isAuth ? privateRoutes : publicRoutes).map((route) => (
				<Route key={route.path} path={route.path} element={route.element} />
			))}
			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	);
};

export default Router;
