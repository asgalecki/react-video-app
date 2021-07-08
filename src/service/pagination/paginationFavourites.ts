const paginationFavourites = (videos: []) => {
	const isFavourite: boolean = true;
	const isAnyVideoFavourite: boolean = videos.some(
		(video: any) => video.isFavourite === isFavourite
	);
	console.log("dupa1");
	if (!isAnyVideoFavourite) {
		console.log("dupa2");
		return [];
	}

	const favouriteVideos: any = videos.slice().filter((video: any) => {
		console.log("dupa3");
		return video.isFavourite === isFavourite;
	});
	console.log("dupa4");
	return favouriteVideos;
};

export default paginationFavourites;
