import { FC, useEffect, useState, useRef } from 'react';
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
	const underline = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const updater = setInterval(() => {
			const newWidth = parseInt(underline.current?.style.width as string) - 1;
			if (newWidth === 0) dispatch(removeNotification(notification.id));
			underline.current!.style.width = `${newWidth}%`;
		}, notification.duration / 100);

		return () => clearInterval(updater);
	}, []);

	const removeHandler = () => dispatch(removeNotification(notification.id));

	return (
		<div className={[styles.item, styles[notification.type]].join(' ')}>
			<Icon className={styles.item__icon} />
			<div className={styles.item__content}>
				<h2 className={styles.item__title}>{notification.title}</h2>
				<p className={styles.item__message}>{notification.message}</p>
				<button className={styles.item__remove} onClick={removeHandler}>
					<AiOutlineClose />
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
