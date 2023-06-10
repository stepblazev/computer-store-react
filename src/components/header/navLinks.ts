export interface INavLink {
	label: string;
	endpoint: string;
}

export const NavLinks: INavLink[] = [
	{ label: 'Главная', endpoint: '/' },
	{ label: 'Компьютеры', endpoint: '/device?type=компьютер' },
	{ label: 'Ноутбуки', endpoint: '/device?type=ноутбук' },
	{ label: 'Мониторы', endpoint: '/device?type=монитор' },
];

export const ComponentLinks: INavLink[] = [
	{ endpoint: '/device?type=процессор', label: 'Процессоры' },
	{ endpoint: '/device?type=видеокарта', label: 'Видеокарты' },
	{ endpoint: '/device?type=материнская плата', label: 'Материнские платы' },
	{ endpoint: '/device?type=оперативная память', label: 'Оперативная память' },
	{ endpoint: '/device?type=система охлаждения', label: 'Системы охлаждения' },
	{ endpoint: '/device?type=жесткий диск', label: 'Жесткие диски' },
	{ endpoint: '/device?type=SSD', label: 'SSD' },
	{ endpoint: '/device?type=корпус', label: 'Корпуса' },
	{ endpoint: '/device?type=блок питания', label: 'Блоки питания' },
];

export const BurgerLinks: INavLink[] = [...NavLinks, ...ComponentLinks];
