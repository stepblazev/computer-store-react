import { FC, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { notificationSlice } from '../../../redux/notice/notificationSlice';
import { INotification } from '../../../models/notificationModels';
import { useAppDispatch } from '../../../hooks/redux';
import { NotificationIcons } from './NotificationIcons';
import styles from './notification-item.module.scss';

type NotificationItemProps = {
	notification: INotification;
};

const NotificationItem: FC<NotificationItemProps> = ({ notification }) => {
	const Icon = NotificationIcons[notification.type];
	const { removeNotification } = notificationSlice.actions;
	const dispatch = useAppDispatch();

	useEffect(() => {
		setTimeout(() => {
			dispatch(removeNotification(notification.id));
		}, notification.duration);
	}, []);

	return (
		<div className={[styles.item, styles[notification.type]].join(' ')}>
			<Icon className={styles.item__icon} />
			<div className={styles.item__content}>
				<h2 className={styles.item__title}>{notification.title}</h2>
				<p className={styles.item__message}>{notification.message}</p>
				<button
					className={styles.item__remove}
					onClick={() => dispatch(removeNotification(notification.id))}
				>
					<AiOutlineClose />
				</button>
			</div>
		</div>
	);
};

export default NotificationItem;
