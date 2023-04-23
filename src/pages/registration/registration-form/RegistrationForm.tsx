import { FC, Fragment, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MdEmail as EmailSVG } from 'react-icons/md';
import { RiLockPasswordFill as PasswordSVG } from 'react-icons/ri';
import { useAppDispatch } from '../../../hooks/redux';
import { notificationSlice } from '../../../redux/notifications/notificationSlice';
import Input from '../../../components/_UI/input/Input';
import Button from '../../../components/_UI/button/Button';
import styles from './registration-form.module.scss';
import { isEmail } from '../../../utils/utils';
import PasswordStrength from '../../../components/_UI/password-strength/PasswordStrength';
import { emailWarning } from '../../../warnings/formWarnings';

type Stages = 1 | 2;

// FIXME декомпозиция | валидация на уже существующий аккаунт
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

	return (
		<form className={styles.form} ref={formRef}>
			<h2 className={styles.form__title}>Регистрация. Шаг {stage}</h2>
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
