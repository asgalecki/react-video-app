import IVideo from "../interfaces/IVideo";

const renderVideos = (
	currentItems: any,
	videoItem: any,
	isFavourite: boolean
) => {
	return currentItems
		.filter((video: IVideo) => {
			if (!isFavourite) {
				return video;
			}
			return video.isFavourite === isFavourite;
		})
		.map((video: IVideo) => {
			return videoItem(video);
		});
};

export default renderVideos;
