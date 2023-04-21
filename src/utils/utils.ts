export function isEmail(template: string): boolean {
	// const pattern = /^\S+@\S+\.\S+$/;
	const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const isEmail = pattern.test(template);
	return isEmail;
}
