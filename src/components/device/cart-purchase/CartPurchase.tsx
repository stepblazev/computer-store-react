import { FC } from 'react';
import { FaShoppingCart as CartSVG } from 'react-icons/fa';
import { ICartDevice } from '../../../models/cartModels';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { purchaseSlice } from '../../../redux/purchase/purchaseSlice';
import styles from './cart-purchase.module.scss';
import { notificationSlice } from '../../../redux/notifications/notificationSlice';
import { purchaseFail } from '../../../warnings/cartWarnings';

type CartPurchaseProps = {
	device: ICartDevice;
};

const CartPurchase: FC<CartPurchaseProps> = ({ device }) => {
	const dispatch = useAppDispatch();
	const { showPurchase } = purchaseSlice.actions;
	const { addNotification } = notificationSlice.actions;

	const { address } = useAppSelector((state) => state.account);

	const handler = () => {
		if (!address || address?.length < 10) {
			dispatch(addNotification(purchaseFail));
			return;
		}
		dispatch(showPurchase([device]));
	};

	return (
		<button className={styles.purchase} onClick={handler}>
			<CartSVG />
			<span>Купить отдельно</span>
		</button>
	);
};

export default CartPurchase;
