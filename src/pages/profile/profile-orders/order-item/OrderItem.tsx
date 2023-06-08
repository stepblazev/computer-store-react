import { FC, useState } from 'react';
import { IOrder } from '../../../../models/accountModels';
import Modal from '../../../../components/_UI/modal/Modal';
import { formatQuantity, getDateFromSQLString } from '../../../../utils/utils';
import noImage from '../../../../assets/noimage.png';
import styles from './order-item.module.scss';
import Group from '../../../../components/_UI/group/Group';
import { API_URL } from '../../../../_config';
import DeviceRate from '../../../device/device-rate/DeviceRate';
import Rating from '../../../../components/device/rating/Rating';
import { Link } from 'react-router-dom';

type OrderItemProps = {
	order: IOrder;
};

const OrderItem: FC<OrderItemProps> = ({ order }) => {
	const [modal, setModal] = useState<boolean>(false);

	const showDevices = () => {
		setModal(true);
	};

	return (
		<li className={styles.item}>
			<h4 className={styles.item__title}>
				<span className={styles.item__titleId} onClick={showDevices}>
					Заказ №{order.id} от {getDateFromSQLString(order.created_at)}
				</span>
				<span className={styles.item__titleStatus}>
					{order.completed ? 'Выполнен' : 'В процессе'}
				</span>
			</h4>
			<ul>
				{order.devices_short.map((name) => (
					<li key={name}>{name}</li>
				))}
			</ul>
			<Modal state={modal} hide={() => setModal(false)}>
				<div className={styles.modal}>
					<h5 className={styles.modal__title}>Заказ №{order.id}</h5>
					<Group label='Данные'>
						<p>
							Статус: <b>{order.completed ? 'Завершен' : 'В процессе'}</b>
						</p>
						<p>
							Дата заказа: <b>{getDateFromSQLString(order.created_at)}</b>
						</p>
						<p>
							Количество: <b>{formatQuantity(order.quantity)}</b>
						</p>
						<p>
							Общая стоимость: <b>{order.total_price} руб.</b>
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
				</div>
			</Modal>
		</li>
	);
};

export default OrderItem;
