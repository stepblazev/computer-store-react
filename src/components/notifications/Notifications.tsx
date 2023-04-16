import { FC } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import NotificationItem from './notification-item/NotificationItem';
import { notificationSlice } from '../../redux/notice/notificationSlice';
import { NotificationTypes } from '../../models/notificationModels';
import SlideInRight from '../../animations/SlideInLeft';
import styles from './notifications.module.scss';

const Notifications: FC = () => {
	const dispatch = useAppDispatch();
	const { addNotification } = notificationSlice.actions;
	const { notifications } = useAppSelector((state) => state.notifications);

	return (
		<div className={styles.notifications}>
			{notifications.map((note) => (
				<SlideInRight key={note.id}>
					<NotificationItem notification={note} />
				</SlideInRight>
			))}

			{/* FIXME remove the buttons below (only for testing) */}
			{/* FIXME remove the buttons below (only for testing) */}
			{/* FIXME remove the buttons below (only for testing) */}
			<div style={{ display: 'flex', gap: '10px' }}>
				<button
					style={{ flexGrow: 1 }}
					onClick={() => {
						dispatch(
							addNotification({
								id: Date.now() + 1,
								title: Date.now().toString(),
								message:
									'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolor nesciunt',
								duration: 3000,
								type: NotificationTypes.INFO,
							})
						);
					}}
				>
					INFO
				</button>
				<button
					style={{ flexGrow: 1 }}
					onClick={() => {
						dispatch(
							addNotification({
								id: Date.now() + 1,
								title: Date.now().toString(),
								message:
									'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolor nesciunt',
								duration: 7000,
								type: NotificationTypes.WARNING,
							})
						);
					}}
				>
					WARN
				</button>
				<button
					style={{ flexGrow: 1 }}
					onClick={() => {
						dispatch(
							addNotification({
								id: Date.now() + 1,
								title: Date.now().toString(),
								message:
									'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolor nesciunt',
								duration: 20000,
								type: NotificationTypes.ERROR,
							})
						);
					}}
				>
					ERROR
				</button>
			</div>
		</div>
	);
};

export default Notifications;
