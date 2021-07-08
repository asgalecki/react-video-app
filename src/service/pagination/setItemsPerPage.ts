const setItemsPerPage = (displayType: boolean) => {
	// itemsPerPage depends from displayType (list - default / grid)
	const itemsPerPage: number = displayType ? 3 : 9;
	return itemsPerPage;
};

export default setItemsPerPage;
