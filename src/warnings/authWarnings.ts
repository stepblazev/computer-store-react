import { INotificationProps, NotificationTypes } from '../models/notificationModels';

export const loginSuccess: INotificationProps = {
	title: 'Успешна авторизация',
	message: 'Вы вошли в аккаунт',
	type: NotificationTypes.SUCCESS,
};
