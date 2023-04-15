import { FC } from 'react';
import classes from './header.module.scss';

const Header: FC = () => {
	return (
		<header className={classes.header}>
			<h1>HEADER</h1>
		</header>
	);
};

export default Header;
