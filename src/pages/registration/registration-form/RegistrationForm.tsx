import { FC, Fragment, useState, useRef, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FaAt as EmailSVG } from 'react-icons/fa';
import { RiLockPasswordFill as PasswordSVG } from 'react-icons/ri';
import { IoMdArrowRoundBack as BackSVG } from 'react-icons/io';
import { useAppDispatch } from '../../../hooks/redux';
import { notificationSlice } from '../../../redux/notifications/notificationSlice';
import Input from '../../../components/_UI/input/Input';
import Button from '../../../components/_UI/button/Button';
import { isEmail } from '../../../utils/utils';
import { passWarning, emailWarning, equalsWarning } from '../../../warnings/formWarnings';
import PasswordStrength from '../../../components/_UI/password-strength/PasswordStrength';
import { fetchUser } from '../../../redux/auth/authSlice';
import { FetchAuthTypes } from '../../../models/authModels';
import styles from './registration-form.module.scss';

type Stages = 1 | 2;

// FIXME декомпозиция + рефакторинг
const RegistrationForm: FC = () => {
	const formRef = useRef<HTMLFormElement>(null);

	const dispatch = useAppDispatch();
	const { addNotification } = notificationSlice.actions;

	const [stage, setStage] = useState<Stages>(1);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [repeatPassword, setRepeatPassword] = useState<string>('');

	const toSecondStage = () => {
		if (email.length === 0) return formRef.current!.reportValidity();
		if (!isEmail(email)) return dispatch(addNotification(emailWarning));
		setStage(2);
	};

	const toFirstStage = () => {
		setStage(1);
		setPassword('');
		setRepeatPassword('');
	};

	const submit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password.length < 8) return dispatch(addNotification(passWarning));
		if (password !== repeatPassword) return dispatch(addNotification(equalsWarning));
		dispatch(fetchUser(email, password, FetchAuthTypes.REGISTRATION));
	};

	return (
		<form className={styles.form} ref={formRef} onSubmit={submit}>
			<h2 className={styles.form__title}>
				Регистрация. <span className={styles.form__titlePrimary}>Шаг {stage}</span>
			</h2>
			{stage === 1 && (
				<Fragment>
					<div className={styles.form__item}>
						<EmailSVG />
						<Input
							placeholder='Ваша электронная почта'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className={styles.form__submit}>
						<Button caption='Далее' onClick={toSecondStage} />
					</div>
				</Fragment>
			)}
			{stage === 2 && (
				<Fragment>
					<button className={styles.form__back} onClick={toFirstStage}>
						<BackSVG />
						Назад
					</button>
					<div className={styles.form__item}>
						<PasswordSVG />
						<Input
							type='password'
							placeholder='Придумайте пароль'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className={styles.form__item}>
						<PasswordSVG />
						<Input
							type='password'
							placeholder='Повторите пароль'
							value={repeatPassword}
							onChange={(e) => setRepeatPassword(e.target.value)}
						/>
					</div>
					<div className={styles.form__strength}>
						<PasswordStrength password={password} />
					</div>
					<div className={styles.form__submit}>
						<Button type='submit' caption='Зарегестрироваться' />
					</div>
				</Fragment>
			)}
			<div className={styles.form__redirect}>
				Уже есть аккаунт? <Link to='/login'>Выполните вход!</Link>
			</div>
		</form>
	);
};

export default RegistrationForm;
