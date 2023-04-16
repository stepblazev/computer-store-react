import { FC, useEffect, useState } from 'react';
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

	const dispatch = useAppDispatch();
	const { removeNotification } = notificationSlice.actions;

	const [lineWidth, setLineWidth] = useState(100);

	useEffect(() => {
		const lineUpdater = setInterval(
			() =>
				setLineWidth((value) => {
					const newValue = value - 1;
					if (newValue === 0) dispatch(removeNotification(notification.id));
					return newValue;
				}),
			notification.duration / 100
		);

		return () => clearInterval(lineUpdater);
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
			<div
				className={styles.item__underline}
				style={{
					width: `${lineWidth}%`,
					transitionDuration: `${notification.duration / 100 / 1000}s`,
				}}
			/>
		</div>
	);
};

export default NotificationItem;
