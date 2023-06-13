import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPurchase, purchaseSlice } from '../../redux/purchase/purchaseSlice';
import Modal from '../_UI/modal/Modal';
import Button from '../_UI/button/Button';
import Loader from '../_UI/loader/Loader';
import styles from './purchase.module.scss';
import { fetchAccount } from '../../redux/account/accountSlice';

const Purchase: FC = () => {
	const dispatch = useAppDispatch();
	const { hidePurchase } = purchaseSlice.actions;

	const { show, devices, isLoading } = useAppSelector((state) => state.purchase);
	const { address } = useAppSelector((state) => state.account);

	const hideModal = () => {
		dispatch(hidePurchase());
	};

	const sendPurchase = () => {
		dispatch(fetchPurchase(devices, address ?? ''));
	};

	useEffect(() => {
		dispatch(fetchAccount());
	}, []);

	const total: number = devices.reduce(
		(acc, device) => acc + Number(device.price) * device.amount,
		0
	);

	return (
		<Modal state={show} hide={hideModal}>
			<form className={styles.purchase}>
				<h2 className={styles.purchase__title}>Оформление заказа</h2>

				<ul className={styles.purchase__list}>
					{devices.map((device) => (
						<li key={device.id}>
							{device.title} - {device.amount} шт.
						</li>
					))}
				</ul>
				<h3 className={styles.purchase__total}>
					Итоговая стоимость: {total.toFixed(2)} руб.
				</h3>
				<Button onClick={sendPurchase} label='Подтвердить заказ' />
				{isLoading && (
					<div className={styles.loader}>
						<Loader />
					</div>
				)}
			</form>
		</Modal>
	);
};

export default Purchase;
