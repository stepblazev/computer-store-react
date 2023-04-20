import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import axios from 'axios';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
import { API_URL } from './_config';

axios.defaults.baseURL = `${API_URL}/api`;

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<App />
	</Provider>
);
