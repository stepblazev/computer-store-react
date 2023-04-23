import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
	INotification,
	INotificationProps,
	NotificationTypes,
} from '../../models/notificationModels';

interface NotificationState {
	notifications: INotification[];
}

const initialState: NotificationState = {
	notifications: [],
};

export const notificationSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		addNotification(state, action: PayloadAction<INotificationProps>) {
			const props = action.payload;
			const newNotification: INotification = {
				id: Date.now(),
				type: props.type ?? NotificationTypes.INFO,
				duration: props.duration ?? 5000,
				...action.payload,
			};
			state.notifications.push(newNotification);
		},
		removeNotification(state, action: PayloadAction<number>) {
			state.notifications = state.notifications.filter((note) => note.id !== action.payload);
		},
		clearNotifications(state) {
			state.notifications = [];
		},
	},
});
