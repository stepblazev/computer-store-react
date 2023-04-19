import { FC, FormEvent, useState } from 'react';
import styles from './login-form.module.scss';
import Input from '../../../components/_UI/input/Input';

const LoginForm: FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const submit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={submit} className={styles.form}>
			<h1>LOGIN FORM</h1>
			<Input
				placeholder='E-Mail'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<Input
				type='password'
				placeholder='Password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
		</form>
	);
};

export default LoginForm;
