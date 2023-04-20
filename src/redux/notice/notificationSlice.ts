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
			const id = action.payload.id ?? Date.now();
			state.notifications.push({ id, ...action.payload });
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
