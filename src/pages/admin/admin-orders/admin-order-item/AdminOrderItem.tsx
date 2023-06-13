import { FC, useState } from 'react';
import { IAdminOrder } from '../../../../models/accountModels';
import Modal from '../../../../components/_UI/modal/Modal';
import { formatQuantity, getDateFromSQLString } from '../../../../utils/utils';
import noImage from '../../../../assets/noimage.png';
import styles from './admin-order-item.module.scss';
import Group from '../../../../components/_UI/group/Group';
import { API_URL } from '../../../../_config';
import Rating from '../../../../components/device/rating/Rating';
import { Link } from 'react-router-dom';
import Button from '../../../../components/_UI/button/Button';
import AdminService from '../../../../http/services/AdminService';

type AdminOrderItemProps = {
	order: IAdminOrder;
	setSearch: (value: string) => any;
	fetchOrders: () => any;
};

const AdminOrderItem: FC<AdminOrderItemProps> = ({ order, setSearch, fetchOrders }) => {
	const [modal, setModal] = useState<boolean>(false);

	const showDevices = () => {
		setModal(true);
	};

	const cancelOrder = async () => {
		if (!confirm('Отменить заказ?')) return;
		await AdminService.cancelOrder(order.id);
		fetchOrders();
	};

	const completeOrder = async () => {
		if (!confirm('Завершить заказ?')) return;
		await AdminService.completeOrder(order.id);
		fetchOrders();
	};

	return (
		<>
			<li key={order.id} className={styles.item} onClick={showDevices}>
				<h4 className={styles.item__title}>
					<span className={styles.item__titleId}>
						Заказ №{order.id} от {getDateFromSQLString(order.created_at)}
					</span>
					<span
						className={styles.item__titleStatus}
						style={{
							color: order.completed ? 'mediumseagreen' : 'gray',
						}}
					>
						{order.completed ? 'Завершен' : order.canceled ? 'Отменен' : 'В процессе'}
					</span>
				</h4>
				<p className={styles.item__client}>
					Клиент: <b>{order.email}</b>
				</p>
				<ul className={styles.item__list}>
					{order.devices_short.map((name) => (
						<li key={name}>{name}</li>
					))}
				</ul>
			</li>
			<Modal state={modal} hide={() => setModal(false)}>
				<div className={styles.modal}>
					<h5 className={styles.modal__title}>Заказ №{order.id}</h5>
					<Group label='Данные'>
						<p>
							Статус:{' '}
							<b
								style={{
									color: order.completed ? 'mediumseagreen' : 'gray',
								}}
							>
								{order.completed
									? 'Завершен'
									: order.canceled
									? 'Отменен'
									: 'В процессе'}
							</b>
						</p>
						<p>
							Дата заказа: <b>{getDateFromSQLString(order.created_at)}</b>
						</p>
						<p>
							Клиент:{' '}
							<b
								className={styles.modal__client}
								onClick={() => {
									setModal(false);
									setSearch(order.email);
								}}
							>
								{order.email}
							</b>
						</p>
						<p>
							Адрес доставки: <b>{order.address}</b>
						</p>
						<p>
							Количество: <b>{formatQuantity(order.quantity)}</b>
						</p>
						<p>
							Общая стоимость: <b>{order.total_price.toFixed(2)} руб.</b>
						</p>
					</Group>
					<Group label='Товары'>
						<ul className={styles.modal__list}>
							{order.devices_long.map((device) => (
								<li key={device.id}>
									<Link
										to={`/device/${device.id}`}
										className={styles.modal__listImage}
									>
										<img
											src={
												device.images[0]
													? `${API_URL}/${device.images[0].url_preview}`
													: noImage
											}
											alt={'PREVIEW'}
										/>
									</Link>
									<div className={styles.modal__listContent}>
										<Link
											to={`/device/${device.id}`}
											className={styles.modal__listTitle}
										>
											{device.title}
										</Link>
										<Rating
											rating={Number(device.rating)}
											ratingCount={Number(device.rating_count)}
										/>
										<p>
											Кол-во: <b>{device.quantity}</b>
										</p>
									</div>
								</li>
							))}
						</ul>
					</Group>
					<Group label='Управление'>
						<div className={styles.modal__controls}>
							{order.completed && (
								<h3
									style={{
										color: 'mediumseagreen',
										textAlign: 'center',
									}}
								>
									Заказ завершен
								</h3>
							)}
							{order.canceled && (
								<h3
									style={{
										color: 'gray',
										textAlign: 'center',
									}}
								>
									Заказ отменен
								</h3>
							)}
							{order.completed === false && order.canceled === false && (
								<Button label='Завершить заказ' onClick={completeOrder} />
							)}
							{order.completed === false && order.canceled === false && (
								<Button label='Отменить заказ' onClick={cancelOrder} />
							)}
						</div>
					</Group>
				</div>
			</Modal>
		</>
	);
};

export default AdminOrderItem;
