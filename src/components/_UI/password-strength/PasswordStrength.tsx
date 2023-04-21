import { FC } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';

type PasswordStrength = {
	password: string;
};

const PasswordStrength: FC<PasswordStrength> = ({ password }) => {
	return (
		<PasswordStrengthBar
			password={password}
			minLength={8}
			shortScoreWord={'Минимальная длина 8 символов'}
			scoreWords={['Очень слабый', 'Слабый', 'Нормальный', 'Хороший', 'Надежный']}
			scoreWordStyle={{ fontWeight: '500' }}
		/>
	);
};

export default PasswordStrength;
