import { FC, useLayoutEffect, useState } from 'react';
import Input from '../../../components/_UI/input/Input';
import SaveButton from '../../../components/_UI/save-button/SaveButton';
import styles from './profile-name.module.scss';

const ProfileName: FC = () => {
	const [showSave, setShowSave] = useState<boolean>(false);
	const [name, setName] = useState<string>('');

	useLayoutEffect(() => {
		setShowSave(name.length > 0);
	}, [name]);

	const save = () => {
		setShowSave(false);
	};

	return (
		<div className={styles.name}>
			<Input value={name} onChange={(e) => setName(e.target.value)} placeholder='Ваше имя' />
			{showSave && <SaveButton onClick={save} />}
		</div>
	);
};

export default ProfileName;
