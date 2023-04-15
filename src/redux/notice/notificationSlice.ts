import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INotification } from '../../models/notificationModels';

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
		addNotification(state, action: PayloadAction<INotification>) {
			state.notifications.push(action.payload);
		},
		removeNotification(state, action: PayloadAction<number>) {
			state.notifications = state.notifications.filter(
				(note) => note.id !== action.payload
			);
		},
		clearNotifications(state) {
			state.notifications = [];
		},
	},
});
