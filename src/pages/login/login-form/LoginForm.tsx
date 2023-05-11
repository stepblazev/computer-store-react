import { FC, FormEvent, useState } from 'react';
import { MdEmail as EmailSVG } from 'react-icons/md';
import { RiLockPasswordFill as PasswordSVG } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { notificationSlice } from '../../../redux/notifications/notificationSlice';
import { emailWarning, passWarning } from '../../../warnings/formWarnings';
import { isEmail } from '../../../utils/utils';
import { fetchUser } from '../../../redux/auth/authSlice';
import { FetchAuthTypes } from '../../../models/authModels';
import Input from '../../../components/_UI/input/Input';
import Button from '../../../components/_UI/button/Button';
import styles from './login-form.module.scss';

const LoginForm: FC = () => {
	const dispatch = useAppDispatch();
	const { addNotification } = notificationSlice.actions;

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const submit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!isEmail(email)) return dispatch(addNotification(emailWarning));
		if (password.length < 8) return dispatch(addNotification(passWarning));
		dispatch(fetchUser(email, password, FetchAuthTypes.LOGIN));
	};

	return (
		<form onSubmit={submit} className={styles.form}>
			<h2 className={styles.form__title}>Вход в аккаунт</h2>
			<div className={styles.form__item}>
				<EmailSVG />
				<Input
					placeholder='Электронная почта'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className={styles.form__item}>
				<PasswordSVG />
				<Input
					type='password'
					placeholder='Пароль'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<div className={styles.form__submit}>
				<Button type='submit' label='Войти' />
			</div>
			<div className={styles.form__redirect}>
				Еще нет аккаунта? <Link to='/registration'>Создайте его!</Link>
			</div>
		</form>
	);
};

export default LoginForm;
