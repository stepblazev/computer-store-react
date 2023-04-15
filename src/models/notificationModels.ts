export enum NotificationTypes {
	INFO = 'INFO',
	WARNING = 'WARNING',
	ERROR = 'ERROR',
}

export interface INotification {
	id: number;
	type: NotificationTypes;
	title: string;
	message: string;
	duration: number;
}
