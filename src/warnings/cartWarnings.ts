import { INotificationProps, NotificationTypes } from '../models/notificationModels';

export const cartAddSuccess: INotificationProps = {
	title: 'Добавлено',
	message: 'Вы добавили товар в корзину',
	type: NotificationTypes.SUCCESS,
};

export const cartRemoveSuccess: INotificationProps = {
	title: 'Удалено',
	message: 'Вы удалили товар из корзины',
	type: NotificationTypes.SUCCESS,
};
