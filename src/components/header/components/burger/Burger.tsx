import { HiMenuAlt1 as BurgerSVG } from 'react-icons/hi';
import { IoClose as CloseSVG } from 'react-icons/io5';
import { createPortal } from 'react-dom';
import { FC, useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { BurgerLinks } from '../../navLinks';
import Logo from '../logo/Logo';
import styles from './burger.module.scss';

function stopPropagation(e: MouseEvent<HTMLDivElement>): void {
	e.stopPropagation();
}

// FIXME рефакторинг бургер меню
const Burger: FC = () => {
	const [burger, setBurger] = useState<boolean>(false);

	const toggleBurger = () => setBurger((prev) => !prev);

	return (
		<div className={styles.burger}>
			<button className={styles.burger__button} onClick={toggleBurger}>
				<BurgerSVG />
			</button>
			{createPortal(
				<div
					className={[styles.burger__menu, burger ? styles.burger__menuActive : ''].join(
						' '
					)}
					onClick={toggleBurger}
				>
					<nav className={styles.burger__menuNav} onClick={stopPropagation}>
						<CloseSVG className={styles.burger__menuClose} onClick={toggleBurger} />
						<Logo />
						<ul>
							{BurgerLinks.map((link) => (
								<li key={link.label} onClick={toggleBurger}>
									<Link to={link.endpoint}>{link.label}</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>,
				document.body
			)}
		</div>
	);
};

export default Burger;
