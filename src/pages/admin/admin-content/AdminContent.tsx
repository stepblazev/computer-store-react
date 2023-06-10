import { FC } from 'react';
import styles from './admin-content.module.scss';
import Tabs, { ITab } from '../../../components/_UI/tabs/Tabs';
import AdminDevices from '../admin-devices/AdminDevices';
import AdminOrders from '../admin-orders/AdminOrders';

const tabs: ITab[] = [
	{ label: 'Товары', Component: <AdminDevices /> },
	{ label: 'Заказы', Component: <AdminOrders /> },
];

const AdminContent: FC = () => {
	return (
		<div className={styles.content}>
			<Tabs tabs={tabs} />
		</div>
	);
};

export default AdminContent;
