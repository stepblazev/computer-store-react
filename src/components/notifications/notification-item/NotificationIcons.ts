import { NotificationTypes } from '../../../models/notificationModels';
import {
	AiOutlineInfoCircle,
	AiOutlineWarning,
	AiOutlineCloseCircle,
} from 'react-icons/ai';

export const NotificationIcons = {
	[NotificationTypes.INFO]: AiOutlineInfoCircle,
	[NotificationTypes.WARNING]: AiOutlineWarning,
	[NotificationTypes.ERROR]: AiOutlineCloseCircle,
};
