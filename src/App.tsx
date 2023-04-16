import { FC } from 'react';
import Layout from './components/Layout';
import Router from './router/Router';
import { BrowserRouter } from 'react-router-dom';

const App: FC = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Router />
			</Layout>
		</BrowserRouter>
	);
};

export default App;
