import setItemsPerPage from "./setItemsPerPage";
import paginationService from "./paginationService";
import paginationIsFavourite from "./paginationIsFavourite";

const pagination = (
	videos: [],
	selected: number,
	displayType: boolean,
	isFavourite: boolean
) => {
	let guard: number = 0;
	let pages: number[] = [];
	let currentItems: [] = [];

	const itemsPerPage: number = setItemsPerPage(displayType);
	if (!videos.length) {
		guard++;
	}
	if (!isFavourite && videos.length <= itemsPerPage && guard === 0) {
		currentItems = videos;
		guard++;
	}
	if (isFavourite && videos.length && guard === 0) {
		const paginate = paginationIsFavourite(
			videos,
			selected,
			pages,
			itemsPerPage
		);
		currentItems = paginate.currentItems;
		pages = paginate.pages;
		guard++;
	}
	if (!isFavourite && videos.length <= itemsPerPage && guard === 0) {
		currentItems = videos;
		guard++;
	}
	if (guard === 0) {
		const paginate = paginationService(videos, selected, pages, itemsPerPage);
		currentItems = paginate.currentItems;
		pages = paginate.pages;
	}

	return { currentItems, pages };
};

export default pagination;
