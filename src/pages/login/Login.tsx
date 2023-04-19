import { FC } from 'react';
import styles from './login.module.scss';
import LoginForm from './login-form/LoginForm';

const Login: FC = () => {
	return (
		<div className={styles.login}>
			<div className={[styles.login__content, 'container'].join(' ')}>
				<LoginForm />
			</div>
		</div>
	);
};

export default Login;
