import { NotificationTypes } from '../../../models/notificationModels';
import {
	AiOutlineInfoCircle as InfoSVG,
	AiOutlineWarning as WarningSVG,
	AiOutlineCloseCircle as ErrorSVG,
} from 'react-icons/ai';

export const NotificationIcons = {
	[NotificationTypes.INFO]: InfoSVG,
	[NotificationTypes.WARNING]: WarningSVG,
	[NotificationTypes.ERROR]: ErrorSVG,
};
