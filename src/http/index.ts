import axios from 'axios';
import { API_URL } from '../_config';
import AuthService from './services/AuthService';

const api = axios.create({
	withCredentials: true,
	baseURL: `${API_URL}/api`,
});

api.interceptors.request.use((config) => {
	const token = localStorage.getItem('token');
	config.headers.Authorization = `Bearer ${token}`;
	return config;
});

api.interceptors.response.use(
	(config) => {
		return config;
	},
	async (error) => {
		const originalRequest = error.config;
		if (error.response.status == 401) {
			try {
				const response = await AuthService.refresh();
				const { accessToken } = response.data;
				localStorage.setItem('token', accessToken);
				return api.request(originalRequest);
			} catch (error) {
				console.log('User is not found');
			}
		}
	}
);

export default api;
