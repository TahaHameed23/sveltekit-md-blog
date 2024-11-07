type DataStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, style: DataStyle = 'medium'): string {
	return new Intl.DateTimeFormat('en-US', { dateStyle: style }).format(new Date(date));
}
