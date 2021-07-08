import paginationService from "./paginationService";
import paginationFavourites from "./paginationFavourites";

const paginationIsFavourite = (
	videos: [],
	selected: number,
	pages: number[],
	itemsPerPage: number
) => {
	let currentItems: [] = [];
	const favourites: [] = paginationFavourites(videos);

	if (!favourites) {
		currentItems = videos;
	}

	if (favourites && favourites.length <= itemsPerPage) {
		currentItems = favourites;
	}

	if (favourites && favourites.length > itemsPerPage) {
		const paginate = paginationService(
			favourites,
			selected,
			pages,
			itemsPerPage
		);
		currentItems = paginate.currentItems;
		pages = paginate.pages;
	}

	return { currentItems, pages };
};

export default paginationIsFavourite;
