import { FC } from 'react';
import Counter from '../../../components/_UI/counter/Counter';
import { useAppDispatch } from '../../../hooks/redux';
import { ICartDevice } from '../../../models/cartModels';
import { cartSlice } from '../../../redux/cart/cartSlice';

type CartCounterProps = {
	device: ICartDevice;
};

const CartCounter: FC<CartCounterProps> = ({ device }) => {
	const dispatch = useAppDispatch();
	const { setAmount } = cartSlice.actions;

	const onChange = (newValue: number) => {
		dispatch(setAmount({ id: device.id, amount: newValue }));
	};

	return <Counter current={device.amount} onChange={onChange} to={device.quantity} />;
};

export default CartCounter;
