import {
	AiOutlineInfoCircle as InfoSVG,
	AiOutlineWarning as WarningSVG,
	AiOutlineCloseCircle as ErrorSVG,
	AiOutlineCheckCircle as SuccessSVG,
} from 'react-icons/ai';

export enum NotificationTypes {
	INFO = 'INFO',
	WARNING = 'WARNING',
	ERROR = 'ERROR',
	SUCCESS = 'SUCCESS',
}

export const NotificationIcons = {
	[NotificationTypes.INFO]: InfoSVG,
	[NotificationTypes.WARNING]: WarningSVG,
	[NotificationTypes.ERROR]: ErrorSVG,
	[NotificationTypes.SUCCESS]: SuccessSVG,
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
