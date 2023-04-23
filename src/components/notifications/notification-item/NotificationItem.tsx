import { FC, useEffect, useRef } from 'react';
import { AiOutlineClose as CloseSVG } from 'react-icons/ai';
import { NotificationIcons, INotification } from '../../../models/notificationModels';
import { useAppDispatch } from '../../../hooks/redux';
import { notificationSlice } from '../../../redux/notifications/notificationSlice';
import styles from './notification-item.module.scss';

type NotificationItemProps = {
	notification: INotification;
};

const NotificationItem: FC<NotificationItemProps> = ({ notification }) => {
	const Icon = NotificationIcons[notification.type];
	const underline = useRef<HTMLDivElement>(null);

	const dispatch = useAppDispatch();
	const { removeNotification } = notificationSlice.actions;

	const remove = () => {
		dispatch(removeNotification(notification.id));
	};

	useEffect(() => {
		const updater = setInterval(() => {
			const newWidth = parseInt(underline.current?.style.width as string) - 1;
			if (newWidth === 0) remove();
			underline.current!.style.width = `${newWidth}%`;
		}, notification.duration / 100);

		return () => clearInterval(updater);
	}, []);

	return (
		<div className={[styles.item, styles[notification.type]].join(' ')}>
			<Icon className={styles.item__icon} />
			<div className={styles.item__content}>
				<h2 className={styles.item__title}>{notification.title}</h2>
				<p className={styles.item__message}>{notification.message}</p>
				<button className={styles.item__remove} onClick={remove}>
					<CloseSVG />
				</button>
			</div>
			<div
				ref={underline}
				className={styles.item__underline}
				style={{
					width: `100%`,
					transitionDuration: `${notification.duration / 100000}s`,
				}}
			/>
		</div>
	);
};

export default NotificationItem;
