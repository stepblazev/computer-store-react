import { INotificationProps, NotificationTypes } from '../models/notificationModels';

export const saveWarning: INotificationProps = {
	title: 'Данные успешно обновлены',
	message: '',
	type: NotificationTypes.SUCCESS,
};
