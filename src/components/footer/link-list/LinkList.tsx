import { FC } from 'react';
import { IFooterLink } from '../Footer';
import { Link } from 'react-router-dom';
import styles from './link-list.module.scss';

type LinkList = {
	title: string;
	links: IFooterLink[];
};

const LinkList: FC<LinkList> = ({ title, links }) => {
	return (
		<div className={styles.column}>
			<h3 className={styles.column__title}>{title}</h3>
			<ul className={styles.column__list}>
				{links.map((link, index) => (
					<li key={index}>
						<Link to={link.link}>{link.label}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default LinkList;
