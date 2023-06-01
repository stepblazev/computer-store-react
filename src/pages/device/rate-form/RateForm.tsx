import { ChangeEvent, FC, useEffect, MouseEvent } from 'react';
import { IDeviceFull } from '../../../models/deviceModels';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import SettableStars from '../../../components/_UI/settable-stars/SettableStars';
import Button from '../../../components/_UI/button/Button';
import Group from '../../../components/_UI/group/Group';
import styles from './rate-form.module.scss';
import {
	deleteRate,
	fetchRate,
	postRate,
	rateSlice,
	updateRate,
} from '../../../redux/rate/rateSlice';
import Loader from '../../../components/_UI/loader/Loader';
import { RATE_SYMBOL_LIMIT } from '../../../_config';

type RateFormProps = {
	device: IDeviceFull;
};

const RateForm: FC<RateFormProps> = ({ device }) => {
	const dispatch = useAppDispatch();
	const { setRate, setMessage } = rateSlice.actions;

	const { isAuth } = useAppSelector((state) => state.auth);
	const { rate, message, showSave, exists, isLoading } = useAppSelector((state) => state.rate);

	const messageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		dispatch(setMessage(e.target.value));
	};

	const rateHandler = (newRate: number) => {
		dispatch(setRate(newRate));
	};

	const saveHandler = (e: MouseEvent<HTMLButtonElement>) => {
		exists
			? dispatch(updateRate(device.id, rate ?? 0, message))
			: dispatch(postRate(device.id, rate ?? 0, message));
	};

	const deleteHandler = (e: MouseEvent<HTMLButtonElement>) => {
		dispatch(deleteRate(device.id));
	};

	useEffect(() => {
		dispatch(fetchRate(device.id));
	}, []);

	if (!isAuth) return null;

	return (
		<form className={styles.form}>
			<Group label={exists ? 'Ваш отзыв ' : 'Напишите отзыв'}>
				{isLoading ? (
					<Loader />
				) : (
					<>
						<div className={styles.form__stars}>
							<SettableStars rating={rate} setRating={rateHandler} />
						</div>
						<textarea
							value={message}
							onChange={messageHandler}
							maxLength={RATE_SYMBOL_LIMIT}
							className={styles.form__message}
							placeholder='Ваше мнение о товаре'
						/>
						<span className={styles.form__limit}>
							Максимальная длина {RATE_SYMBOL_LIMIT} символов
						</span>
						<div className={styles.form__buttons}>
							{showSave && <Button label='Сохранить' onClick={saveHandler} />}
							{exists && <Button label='Удалить' onClick={deleteHandler} />}
						</div>
					</>
				)}
			</Group>
		</form>
	);
};

export default RateForm;
