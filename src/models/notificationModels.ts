import {
	AiOutlineInfoCircle as InfoSVG,
	AiOutlineWarning as WarningSVG,
	AiOutlineCloseCircle as ErrorSVG,
} from 'react-icons/ai';

export enum NotificationTypes {
	INFO = 'INFO',
	WARNING = 'WARNING',
	ERROR = 'ERROR',
}

export const NotificationIcons = {
	[NotificationTypes.INFO]: InfoSVG,
	[NotificationTypes.WARNING]: WarningSVG,
	[NotificationTypes.ERROR]: ErrorSVG,
};

export interface INotificationProps {
	title: string;
	message: string;
	duration?: number;
	type?: NotificationTypes;
}

export interface INotification extends INotificationProps {
	readonly id: number;
	duration: number;
	type: NotificationTypes;
}
