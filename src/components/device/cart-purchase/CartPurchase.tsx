import { FC } from 'react';
import { FaShoppingCart as CartSVG } from 'react-icons/fa';
import { ICartDevice } from '../../../models/cartModels';
import { useAppDispatch } from '../../../hooks/redux';
import { purchaseSlice } from '../../../redux/purchase/purchaseSlice';
import styles from './cart-purchase.module.scss';

type CartPurchaseProps = {
	device: ICartDevice;
};

const CartPurchase: FC<CartPurchaseProps> = ({ device }) => {
	const dispatch = useAppDispatch();
	const { showPurchase } = purchaseSlice.actions;

	const handler = () => {
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
