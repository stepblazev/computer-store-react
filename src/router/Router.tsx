import { RouteProps, Route, Routes, Navigate } from 'react-router-dom';
import { FC } from 'react';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';

const routes: RouteProps[] = [
	{ path: '/', Component: Home },
	{ path: '/login', Component: Login },
];

// FIXME (404 page)
const Router: FC = () => {
	return (
		<Routes>
			{routes.map((route) => (
				<Route key={route.path} path={route.path} Component={route.Component} />
			))}
		</Routes>
	);
};

export default Router;
