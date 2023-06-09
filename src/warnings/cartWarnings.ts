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
	title: 'Заказ',
	message: 'Вы успешно оформили заказ',
	type: NotificationTypes.SUCCESS,
	duration: 7000,
};

export const purchaseFail: INotificationProps = {
	title: 'Оформление заказа',
	message: 'Укажите адрес для оформления заказа',
	type: NotificationTypes.INFO,
	duration: 7000,
};
