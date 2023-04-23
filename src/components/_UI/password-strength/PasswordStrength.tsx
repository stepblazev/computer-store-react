import { FC } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import styles from './password-strength.module.scss';

type PasswordStrength = {
	password: string;
};

const PasswordStrength: FC<PasswordStrength> = ({ password }) => {
	return (
		<PasswordStrengthBar
			className={styles.strength}
			password={password}
			minLength={8}
			shortScoreWord={'Минимальная длина 8 символов'}
			scoreWords={['Очень слабый', 'Слабый', 'Нормальный', 'Хороший', 'Надежный']}
			scoreWordStyle={{ fontWeight: '500' }}
		/>
	);
};

export default PasswordStrength;
