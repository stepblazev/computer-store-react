import { FC, Fragment } from 'react';
import Notifications from './notifications/Notifications';
import Header from './header/Header';
import Footer from './footer/Footer';
import Purchase from './purchase/Purchase';
import Popular from './popular/Popular';

type layoutProps = {
	children: React.ReactNode;
};

const Layout: FC<layoutProps> = ({ children }) => {
	return (
		<Fragment>
			<Header />
			<main className='main'>{children}</main>
			<Footer />
			<Notifications />
			<Purchase />
		</Fragment>
	);
};

export default Layout;
