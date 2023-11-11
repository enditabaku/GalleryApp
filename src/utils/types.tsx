export interface ClientTypes {
	CLIENT_NAME: string,
	CLIENT_ID: string
};

export interface GalleryUrlObjectTypes {
	section: 'hot' | 'top' | 'user',
	sort: 'viral' | 'top' | 'time',
	window: 'day' | 'week' | 'month' | 'year' | 'all',
	showViral: boolean,
	page?: number
}

export interface OptionType {
	value: string,
	label: string
}