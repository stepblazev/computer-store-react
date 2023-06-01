import { INotificationProps, NotificationTypes } from '../models/notificationModels';

export const postRateWarning: INotificationProps = {
	title: 'Ваш отзыв сохранен',
	message: 'Спасибо что оставили отзыв на данный товар',
	type: NotificationTypes.SUCCESS,
	duration: 3000,
};

export const updateRateWarning: INotificationProps = {
	title: 'Ваш отзыв изменен',
	message: 'Спасибо что оставили отзыв на данный товар',
	type: NotificationTypes.SUCCESS,
	duration: 3000,
};

export const deleteRateWarning: INotificationProps = {
	title: 'Ваш отзыв удален',
	message: 'Вы удалили отзыв на данный товар',
	type: NotificationTypes.INFO,
	duration: 3000,
};
