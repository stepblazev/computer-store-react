import { INotificationProps, NotificationTypes } from '../models/notificationModels';

export const cartAddSuccess: INotificationProps = {
	title: 'Добавлено',
	message: 'Вы добавили товар в корзину',
	type: NotificationTypes.INFO,
};

export const cartRemoveSuccess: INotificationProps = {
	title: 'Удалено',
	message: 'Вы удалили товар из корзины',
	type: NotificationTypes.INFO,
};

export const purchaseSuccess: INotificationProps = {
	title: 'Заказа',
	message: 'Вы успешно оформили заказ. В скором времени с вами свяжется наш работник',
	type: NotificationTypes.SUCCESS,
};
