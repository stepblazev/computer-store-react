import { INotificationProps, NotificationTypes } from '../models/notificationModels';

export const loginSuccess: INotificationProps = {
	title: 'Успешна авторизация',
	message: 'Вы вошли в аккаунт',
	type: NotificationTypes.SUCCESS,
};

export const authWarning: INotificationProps = {
	title: 'Вы не авторизованы',
	message: 'Для доступа к корзине необходимо войти в аккаунт',
	type: NotificationTypes.ERROR,
};
