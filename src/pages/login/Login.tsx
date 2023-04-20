import { FC } from 'react';
import styles from './login.module.scss';
import LoginForm from './login-form/LoginForm';
import { SlideInDirections } from '../../animations/SlideIn';
import SlideIn from '../../animations/SlideIn';

const Login: FC = () => {
	return (
		<div className={styles.login}>
			<div className={[styles.login__content, 'container'].join(' ')}>
				<SlideIn direction={SlideInDirections.TOP}>
					<LoginForm />
				</SlideIn>
			</div>
		</div>
	);
};

export default Login;
