const paginationService = (
	videos: any,
	selected: number,
	pages: number[],
	itemsPerPage: number
) => {
	const indexOfLastItem: number = selected * itemsPerPage;
	const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;

	for (let i = 1; i <= Math.ceil(videos.length / itemsPerPage); i++) {
		pages.push(i);
	}
	const currentItems = videos.slice(indexOfFirstItem, indexOfLastItem);

	return { currentItems, pages };
};

export default paginationService;
