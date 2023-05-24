import { DEVICE_LIMIT } from '../_config';

export function isEmail(template: string): boolean {
	const pattern = /^([^\s@]+@[^\s@]+\.[^\s@]+)$/i;
	const isEmail = pattern.test(template);
	return isEmail;
}

export function getPages(total: number): number {
	return Math.ceil(total / DEVICE_LIMIT);
}

export function getDateFromSQLString(stringDate: string): string {
	const date = stringDate.split('T')[0];
	const arrayDate = date.split('-');
	return `${arrayDate[2]}.${arrayDate[1]}.${arrayDate[0]}`;
}

export function formatQuantity(quantity: number): string {
	quantity = Number(quantity);
	if (quantity === 1) return `${quantity} товар`;
	else if (quantity % 10 === 1 && quantity % 100 !== 11) return `${quantity} товара`;
	else if (
		(quantity % 10 === 2 || quantity % 10 === 3 || quantity % 10 === 4) &&
		(quantity % 100 < 10 || quantity % 100 >= 20)
	)
		return `${quantity} товара`;
	else return `${quantity} товаров`;
}
