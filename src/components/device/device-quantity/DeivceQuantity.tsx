import { FC } from 'react';
import styles from './device-quantity.module.scss';

type DeviceQuantityProps = {
	quantity: number;
};

const DeviceQuantity: FC<DeviceQuantityProps> = ({ quantity }) => {
	return (
		<span className={quantity > 0 ? styles.exists : styles.not}>
			{quantity > 0 ? `В наличии ${quantity} шт.` : 'Нет на складе'}
		</span>
	);
};

export default DeviceQuantity;
