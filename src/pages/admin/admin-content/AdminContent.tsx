import { FC } from 'react';
import styles from './admin-content.module.scss';
import Tabs, { ITab } from '../../../components/_UI/tabs/Tabs';
import AdminDevices from '../admin-devices/AdminDevices';

const tabs: ITab[] = [
	{ label: 'Товары', Component: <AdminDevices /> },
	{ label: 'Заказы', Component: <>Вкладка 2</> },
	{ label: 'Клиенты', Component: <>Вкладка 3</> },
];

const AdminContent: FC = () => {
	return (
		<div className={styles.content}>
			<Tabs tabs={tabs} />
		</div>
	);
};

export default AdminContent;
