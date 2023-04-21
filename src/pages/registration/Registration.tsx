import { FC } from 'react';
import RegistrationForm from './registration-form/RegistrationForm';
import SlideIn, { SlideInDirections } from '../../animations/SlideIn';
import styles from './registration.module.scss';

const Registration: FC = () => {
	return (
		<div className={styles.registration}>
			<div className={styles.registration__content}>
				<SlideIn direction={SlideInDirections.TOP}>
					<RegistrationForm />
				</SlideIn>
			</div>
		</div>
	);
};

export default Registration;
