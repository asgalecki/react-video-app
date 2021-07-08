const paginationFavourites = (videos: []) => {
	const isFavourite: boolean = true;
	const isAnyVideoFavourite: boolean = videos.some(
		(video: any) => video.isFavourite === isFavourite
	);
	if (!isAnyVideoFavourite) {
		return [];
	}

	const favouriteVideos: any = videos.slice().filter((video: any) => {
		return video.isFavourite === isFavourite;
	});
	return favouriteVideos;
};

export default paginationFavourites;
