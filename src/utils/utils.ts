export function isEmail(template: string): boolean {
	const pattern = /^([^\s@]+@[^\s@]+\.[^\s@]+)$/i;
	const isEmail = pattern.test(template);
	return isEmail;
}

export function getPages(total: number, limit: number): number {
	return Math.ceil(total / limit);
}

export function addLeadingZero(value: number): string {
	return value < 10 ? `0${value}` : value.toString();
}

export function getDateFromSQLString(stringDate: string): string {
	const dateTime = new Date(stringDate);
	const day = addLeadingZero(dateTime.getDate());
	const month = addLeadingZero(dateTime.getMonth() + 1);
	const year = dateTime.getFullYear();
	const hours = addLeadingZero(dateTime.getHours());
	const minutes = addLeadingZero(dateTime.getMinutes());

	return `${day}.${month}.${year} (${hours}:${minutes})`;
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
