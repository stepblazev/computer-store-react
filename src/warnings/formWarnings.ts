import { INotification, NotificationTypes } from '../models/notificationModels';

export const emailWarning: INotification = {
	title: 'Некорректные данные',
	message: 'Проверьте введенный Email, и повторите попытку',
	duration: 4000,
	type: NotificationTypes.WARNING,
};

export const passWarning: INotification = {
	title: 'Некорректные данные',
	message: 'Минимальная длина пароля составляет 8 символов',
	duration: 4000,
	type: NotificationTypes.WARNING,
};
