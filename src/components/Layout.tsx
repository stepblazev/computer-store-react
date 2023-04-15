import { FC, Fragment } from 'react';
import Notifications from './notifications/Notifications';
import Header from './header/Header';
import Footer from './footer/Footer';

type layoutProps = {
	children: React.ReactNode;
};

const Layout: FC<layoutProps> = ({ children }) => {
	return (
		<Fragment>
			<Header />
			<main>{children}</main>
			<Footer />
			<Notifications />
		</Fragment>
	);
};

export default Layout;
