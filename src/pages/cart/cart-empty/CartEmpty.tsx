import { FC } from 'react';
import { FaShoppingCart as CartSVG } from 'react-icons/fa';
import styles from './cart-empty.module.scss';

const CartEmpty: FC = () => {
	return (
		<div className={styles.empty}>
			<CartSVG />
			Ваша корзина пуста
		</div>
	);
};

export default CartEmpty;
