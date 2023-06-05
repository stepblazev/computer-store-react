import { FC } from 'react';
import { MdDeleteOutline as DeleteSVG } from 'react-icons/md';
import styles from './admin-delete-device.module.scss';

type AdminDeleteDeviceProps = {
	id: number;
	deleteHandler: () => any;
};

const AdminDeleteDevice: FC<AdminDeleteDeviceProps> = ({ id, deleteHandler }) => {
	return (
		<button className={styles.delete} onClick={deleteHandler}>
			<DeleteSVG />
			<span>Удалить товар</span>
		</button>
	);
};

export default AdminDeleteDevice;
