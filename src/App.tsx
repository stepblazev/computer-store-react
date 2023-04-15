import { FC } from 'react';
import Layout from './components/Layout';
import RouteProvider from './router/RouteProvider';

const App: FC = () => {
	return (
		<Layout>
			<RouteProvider />
		</Layout>
	);
};

export default App;
