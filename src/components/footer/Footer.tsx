import { FC, memo } from 'react';
import LinkList from './link-list/LinkList';
import styles from './footer.module.scss';
import InfoList from './info-list/InfoList';
import {
	SlSocialGoogle as GoogleSVG,
	SlSocialInstagram as InstagramSVG,
	SlSocialLinkedin as LinkedinSVG,
	SlSocialVkontakte as VkSVG,
	SlSocialFacebook as FacebookSVG,
} from 'react-icons/sl';
import { INavLink } from '../header/navLinks';

const CatalogLinks: INavLink[] = [
	{ endpoint: '/device?type=процессор', label: 'Процессоры' },
	{ endpoint: '/device?type=видеокарта', label: 'Видеокарты' },
	{ endpoint: '/device?type=жесткий диск', label: 'Жесткие диски' },
	{ endpoint: '/device?type=блок питания', label: 'Блоки питания' },
	{ endpoint: '/device?type=корпус', label: 'Корпуса' },
];

const UserLinks: INavLink[] = [
	{ endpoint: '/profile', label: 'Профиль' },
	{ endpoint: '/cart', label: 'Корзина' },
	{ endpoint: '/profile', label: 'Заказы' },
	{ endpoint: '/', label: 'Каталог' },
	{ endpoint: '/', label: 'Наш блог' },
	{ endpoint: '/admin', label: 'Admin' },
];

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={[styles.footer__content, 'container'].join(' ')}>
				<div className={styles.footer__contentRow}>
					<LinkList title='Каталог' links={CatalogLinks} />
					<LinkList title='Общее' links={UserLinks} />
					<InfoList
						title='Контакты'
						text='Адрес: 222307, Молодечно, ул. В.Гостинец, 13, оф. 41. E-mail: smartvostok@technomall.by. Указанные контакты также являются контактами для связи по вопросам обращения покупателей о нарушении их прав. Номер телефона работников местных исполнительных и распорядительных органов по месту государственной регистрации ООО «SmartVostok», уполномоченных рассматривать обращения покупателей: +375 44 710 24 41.'
					/>
				</div>
				<div className={styles.footer__contentRow}>
					<ul className={styles.footer__contentLinks}>
						<li>
							<a target='_blank' href='https://www.google.by/'>
								<GoogleSVG />
							</a>
						</li>
						<li>
							<a target='_blank' href='https://www.instagram.com/'>
								<InstagramSVG />
							</a>
						</li>
						<li>
							<a target='_blank' href='https://www.linkedin.com/'>
								<LinkedinSVG />
							</a>
						</li>
						<li>
							<a target='_blank' href='https://vk.com/'>
								<VkSVG />
							</a>
						</li>
						<li>
							<a target='_blank' href='https://ru-ru.facebook.com/'>
								<FacebookSVG />
							</a>
						</li>
					</ul>
				</div>
				<div className={styles.footer__contentRow}>
					<p>
						© ООО «SmartVostok» 2023,{' '}
						<a href='https://github.com/stepblazev' target='_blank'>
							MADE BY SBV
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default memo(Footer);
