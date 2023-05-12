import { DEVICE_LIMIT } from '../_config';

export function isEmail(template: string): boolean {
	const pattern = /^([^\s@]+@[^\s@]+\.[^\s@]+)$/i;
	const isEmail = pattern.test(template);
	return isEmail;
}

export function getPages(total: number): number {
	return Math.ceil(total / DEVICE_LIMIT);
}
