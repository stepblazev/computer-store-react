import { INotificationProps, NotificationTypes } from '../models/notificationModels';

export const deleteSuccess: INotificationProps = {
	title: 'Удалено',
	message: 'Вы удалили товар',
	type: NotificationTypes.INFO,
};
