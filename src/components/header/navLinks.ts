interface INavLink {
	label: string;
	endpoint: string;
}

// FIXME исправить ссылки
export const navLinks: INavLink[] = [
	{ label: 'Главная', endpoint: '/' },
	{ label: 'Компьютеры', endpoint: '/device?type=компьютер' },
	{ label: 'Процессоры', endpoint: '/device?type=процессор' },
	{ label: 'О Нас', endpoint: '/about' },
];
