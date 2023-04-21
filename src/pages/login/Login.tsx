import { FC } from 'react';
import LoginForm from './login-form/LoginForm';
import SlideIn, { SlideInDirections } from '../../animations/SlideIn';
import styles from './login.module.scss';

const Login: FC = () => {
	return (
		<div className={styles.login}>
			<div className={styles.login__content}>
				<SlideIn direction={SlideInDirections.TOP}>
					<LoginForm />
				</SlideIn>
			</div>
		</div>
	);
};

export default Login;
