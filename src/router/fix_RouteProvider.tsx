import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { FC } from 'react';
import Home from '../pages/home/Home';

const router = createBrowserRouter([
	{ path: '/', element: <Home /> },
	{ path: '*', element: <Navigate to='/' /> },
]);

const RouteProvider: FC = () => {
	return <RouterProvider router={router} />;
};

export default RouteProvider;
