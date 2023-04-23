import { FC, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import NotificationItem from './notification-item/NotificationItem';
import { notificationSlice } from '../../redux/notifications/notificationSlice';
import { NotificationTypes } from '../../models/notificationModels';
import SlideIn, { SlideInDirections } from '../../animations/SlideIn';
import styles from './notifications.module.scss';

const Notifications: FC = () => {
	const dispatch = useAppDispatch();
	const { addNotification } = notificationSlice.actions;
	const { notifications } = useAppSelector((state) => state.notifications);

	const authError = useAppSelector((state) => state.auth.error);

	// FIXME рефакторинг
	useEffect(() => {
		if (!authError) return;
		const newNotification = {
			title: 'Ошибка',
			message: authError,
			type: NotificationTypes.ERROR,
		};
		dispatch(addNotification(newNotification));
	}, [authError]);

	return (
		<div className={styles.notifications}>
			{notifications.map((note) => (
				<SlideIn direction={SlideInDirections.RIGHT} key={note.id}>
					<NotificationItem notification={note} />
				</SlideIn>
			))}
		</div>
	);
};

export default Notifications;
