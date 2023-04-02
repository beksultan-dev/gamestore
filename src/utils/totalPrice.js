export const calcTotalPrice = (arr) =>
	arr.reduce((acc, item) => (acc += item.price), 0);
