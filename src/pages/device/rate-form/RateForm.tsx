import { ChangeEvent, FC, useEffect, useState } from 'react';
import { IDeviceFull } from '../../../models/deviceModels';
import { useAppSelector } from '../../../hooks/redux';
import SettableStars from '../../../components/_UI/settable-stars/SettableStars';
import Button from '../../../components/_UI/button/Button';
import Group from '../../../components/_UI/group/Group';
import styles from './rate-form.module.scss';

type RateFormProps = {
	device: IDeviceFull;
};

const RateForm: FC<RateFormProps> = ({ device }) => {
	const { isAuth } = useAppSelector((state) => state.auth);

	const [showSave, setShowSave] = useState<boolean>(false);

	const [rating, setRating] = useState<number | null>(null);
	const [message, setMessage] = useState<string>('');

	useEffect(() => {
		if (message.length > 0 && rating) setShowSave(true);
	}, [rating, message]);

	const messageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(e.target.value);
	};

	if (!isAuth) return null;

	return (
		<form className={styles.form}>
			<Group label={'Напишите отзыв'}>
				<div className={styles.form__stars}>
					<SettableStars rating={rating} setRating={setRating} />
				</div>
				<textarea
					value={message}
					onChange={messageHandler}
					maxLength={600}
					className={styles.form__message}
				/>
				<div className={styles.form__buttons}>
					{showSave && <Button label='Сохранить' />}
					<Button label='Удалить' />
				</div>
			</Group>
		</form>
	);
};

export default RateForm;
