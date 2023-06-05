import { FC } from 'react';
import { AiOutlineEdit as EditSVG } from 'react-icons/ai';
import styles from './admin-edit-device.module.scss';

type AdminEditDeviceProps = {
	toDevice: () => any;
};

const AdminEditDevice: FC<AdminEditDeviceProps> = ({ toDevice }) => {
	return (
		<button className={styles.edit} onClick={toDevice}>
			<EditSVG />
			<span>Редактировать</span>
		</button>
	);
};

export default AdminEditDevice;
