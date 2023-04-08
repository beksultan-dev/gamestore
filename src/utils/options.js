export const options = [
	{ value: { sortBy: 'id', order: 'asc' }, label: 'По умолчанию' },
	{
		value: { sortBy: 'price', order: 'desc' },
		label: 'По цене (Дороже)',
	},
	{
		value: { sortBy: 'price', order: 'asc' },
		label: 'По цене (Дешевле)',
	},
	{
		value: { sortBy: 'title', order: 'asc' },
		label: 'По названию (a - z)',
	},
	{
		value: { sortBy: 'title', order: 'desc' },
		label: 'По названию (z - a)',
	},
];
