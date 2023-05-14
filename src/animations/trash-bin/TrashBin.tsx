import { FC } from 'react';
import styles from './trash-bin.module.scss';

const TrashBin: FC = () => {
	return (
		<div className={styles.bin}>
			<div className={styles.bin__lid}>
				<div></div>
				<div></div>
			</div>
			<div className={styles.bin__body}></div>
		</div>
	);
};

export default TrashBin;
