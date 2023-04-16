import { FaUserCircle as ProfileSVG, FaShoppingCart as CartSVG } from 'react-icons/fa';
import { RiLoginCircleLine as LoginSVG } from 'react-icons/ri';
import { HiPhone as PhoneSVG } from 'react-icons/hi';
import { MdMail as MailSVG } from 'react-icons/md';
import { BiSearchAlt as SearchSVG } from 'react-icons/bi';
import { BsFillMotherboardFill as MotherSVG } from 'react-icons/bs';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import styles from './header.module.scss';

const Header: FC = () => {
	const { isAuth } = useAppSelector((state) => state.auth);

	// FIXME убрать в отдельные компоненты
	return (
		<header className={styles.header}>
			<div className={[styles.header__first, 'container'].join(' ')}>
				<div className={styles.header__firstDesktop}>
					<a href='tel:+375447102441'>
						<PhoneSVG />
						+375447102441
					</a>
					<a href='mailto:ohvatuki@gmail.com'>
						<MailSVG />
						ohvatuki@gmail.com
					</a>
					{isAuth ? (
						<Link to='/profile'>
							<ProfileSVG />
							Профиль
						</Link>
					) : (
						<Link to='/login'>
							<LoginSVG />
							Войти в аккаунт
						</Link>
					)}
				</div>
				<div className={styles.header__firstMobile}></div>
			</div>
			<div className={[styles.header__second, 'container'].join(' ')}>
				<div className={styles.header__secondDesktop}>
					<Link to='/' className={styles.header__secondLogo}>
						<span>TECHNO</span>
						<span>MALL</span>
					</Link>
					<div className={styles.header__secondSearch}>
						<input type='text' placeholder='Поиск по каталогу' />
						<SearchSVG />
						<button>Поиск</button>
					</div>
					<Link to='/cart' className={styles.header__secondCart}>
						<CartSVG />
						Корзина
						<span>3</span>
					</Link>
				</div>
				<div className={styles.header__secondMobile}></div>
			</div>
			<div className={styles.header__third}>
				<div className={[styles.header__thirdDesktop, 'container'].join(' ')}>
					<div className={styles.header__thirdIcon}>
						<MotherSVG />
						Комплектующие
					</div>
					<nav className={styles.header__thirdNav}>
						<ul>
							<li>
								<Link to='/'>Главная</Link>
							</li>
							<li>
								<Link to='/'>Компьютеры</Link>
							</li>
							<li>
								<Link to='/'>Ноутбуки</Link>
							</li>
							<li>
								<Link to='/'>О Нас</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
