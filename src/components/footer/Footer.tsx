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

export interface IFooterLink {
	link: string;
	label: string;
}

const CatalogLinks: IFooterLink[] = [
	{ link: '/device?type=процессор', label: 'Процессоры' },
	{ link: '/device?type=видеокарта', label: 'Видеокарты' },
	{ link: '/device?type=жесткий диск', label: 'Жесткие диски' },
	{ link: '/device?type=блок питания', label: 'Блоки питания' },
	{ link: '/device?type=корпус', label: 'Корпуса' },
];

const UserLinks: IFooterLink[] = [
	{ link: '/profile', label: 'Профиль' },
	{ link: '/cart', label: 'Корзина' },
	{ link: '/profile', label: 'Заказы' },
	{ link: '/', label: 'Каталог' },
	{ link: '/', label: 'Наш блог' },
];

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={[styles.footer__content, 'container'].join(' ')}>
				<div className={styles.footer__contentRow}>
					<LinkList title='Каталог' links={CatalogLinks} />
					<LinkList title='Клиенту' links={UserLinks} />
					<InfoList
						title='Контакты'
						text='Адрес: 222307, Молодечно, ул. В.Гостинец, 13, оф. 41. E-mail: fgl@technomall.by. Указанные контакты также являются контактами для связи по вопросам обращения покупателей о нарушении их прав. Номер телефона работников местных исполнительных и распорядительных органов по месту государственной регистрации ООО «The Future Gadget Lab», уполномоченных рассматривать обращения покупателей: +375 44 710 24 41.'
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
					<p>© ООО «The Future Gadget Lab» 2023, MADE BY SBV</p>
				</div>
			</div>
		</footer>
	);
};

export default memo(Footer);
