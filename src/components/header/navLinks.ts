interface INavLink {
	label: string;
	endpoint: string;
}

// FIXME исправить ссылки
export const navLinks: INavLink[] = [
	{ label: 'Главная', endpoint: '/' },
	{ label: 'Компьютеры', endpoint: '/computers' },
	{ label: 'Ноутбуки', endpoint: '/laptops' },
	{ label: 'О Нас', endpoint: '/about' },
];
