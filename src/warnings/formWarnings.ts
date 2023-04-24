import { INotificationProps, NotificationTypes } from '../models/notificationModels';

export const emailWarning: INotificationProps = {
	title: 'Некорректные данные',
	message: 'Проверьте введенный Email, и повторите попытку',
	type: NotificationTypes.WARNING,
};

export const passWarning: INotificationProps = {
	title: 'Некорректные данные',
	message: 'Минимальная длина пароля составляет 8 символов',
	type: NotificationTypes.WARNING,
};

export const equalsWarning: INotificationProps = {
	title: 'Некорректные данные',
	message: 'Ввееденные пароли не совпадают. Повторите попытку',
	type: NotificationTypes.WARNING,
};
