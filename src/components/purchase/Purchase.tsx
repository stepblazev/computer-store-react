import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPurchase, purchaseSlice } from '../../redux/purchase/purchaseSlice';
import Modal from '../_UI/modal/Modal';
import styles from './purchase.module.scss';
import ChangeAddress from '../change-address/ChangeAddress';
import Button from '../_UI/button/Button';

const Purchase: FC = () => {
	const dispatch = useAppDispatch();
	const { hidePurchase } = purchaseSlice.actions;

	const { show, devices } = useAppSelector((state) => state.purchase);

	const hideModal = () => {
		dispatch(hidePurchase());
	};

	const sendPurchase = () => {
		dispatch(fetchPurchase(devices));
	};

	return (
		<Modal state={show} hide={hideModal}>
			<form className={styles.purchase}>
				<h2>Оформление заказа</h2>
				<ul>
					{devices.map((device) => (
						<li key={device.id}>
							{device.title} - {device.amount} шт.
						</li>
					))}
				</ul>
				<ChangeAddress />
				<Button onClick={sendPurchase} label='Подтвердить заказ' />
			</form>
		</Modal>
	);
};

export default Purchase;
