import { FC } from 'react';
import styles from './logo.module.scss';

const Logo: FC = () => {
	return (
		<div className={styles.logo}>
			<span className={styles.logoDesktop}>
				<span className={styles.logo__left}>TECHNO</span>
				<span className={styles.logo__right}>MALL</span>
			</span>
			<span className={styles.logoMobile}>
				<span className={styles.logo__left}>T</span>
				<span className={styles.logo__right}>MALL.</span>
			</span>
		</div>
	);
};

export default Logo;
