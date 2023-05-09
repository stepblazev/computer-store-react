interface INavLink {
	label: string;
	endpoint: string;
}

// FIXME исправить ссылки
export const navLinks: INavLink[] = [
	{ label: 'Главная', endpoint: '/' },
	{ label: 'Процессоры', endpoint: '/device?type=процессор' },
	{ label: 'Видеокарты', endpoint: '/device?type=видеокарта' },
	{ label: 'О Нас', endpoint: '/about' },
];
