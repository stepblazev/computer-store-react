import { HiPhone as PhoneSVG } from 'react-icons/hi';
import { MdMail as MailSVG } from 'react-icons/md';
import { BsFillMotherboardFill as MotherSVG } from 'react-icons/bs';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Search from './components/search/Search';
import Logo from './components/logo/Logo';
import Profile from './components/profile/Profile';
import SlideIn, { SlideInDirections } from '../../animations/SlideIn';
import Burger from './components/burger/Burger';
import { NavLinks } from './navLinks';
import styles from './header.module.scss';

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={[styles.header__first, 'container'].join(' ')}>
				<div className={styles.header__firstDesktop}>
					<a href='tel:+375447102441' className='svg-link'>
						<PhoneSVG />
						+375447102441
					</a>
					<a href='mailto:ohvatuki@gmail.com' className='svg-link'>
						<MailSVG />
						ohvatuki@gmail.com
					</a>
					<div className={styles.header__firstAccount}>
						<Profile />
					</div>
				</div>
				<div className={styles.header__firstMobile}>
					<div>
						<Burger />
						<Logo />
					</div>
					<div>
						<Cart />
						<Profile />
					</div>
				</div>
			</div>
			<div className={[styles.header__second, 'container'].join(' ')}>
				<div className={styles.header__secondDesktop}>
					<Logo />
					<Search />
					<Cart />
				</div>
				<div className={styles.header__secondMobile}>
					<Search />
				</div>
			</div>
			<nav className={styles.header__third}>
				<div className={[styles.header__thirdDesktop, 'container'].join(' ')}>
					<SlideIn direction={SlideInDirections.LEFT} delay={0}>
						<div className={styles.header__thirdIcon}>
							<MotherSVG />
							Комплектующие
						</div>
					</SlideIn>
					<SlideIn direction={SlideInDirections.RIGHT} delay={300}>
						<ul className={styles.header__thirdNav}>
							{NavLinks.map((link) => (
								<li key={link.endpoint}>
									<Link to={link.endpoint}>{link.label}</Link>
								</li>
							))}
						</ul>
					</SlideIn>
				</div>
			</nav>
		</header>
	);
};

export default Header;
