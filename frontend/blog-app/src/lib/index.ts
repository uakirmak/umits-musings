// place files you want to import through the `$lib` alias in this folder.
export function formatDate(date: Date): string {
	return new Intl.DateTimeFormat('en-US').format(date);
}
