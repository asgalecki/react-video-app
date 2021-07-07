import IVideo from "../interfaces/IVideo";
const key: string = String(process.env.REACT_APP_YT_KEY);

const youtubeApiClient = async (videoId: string) => {
	const base: string = "https://www.googleapis.com/youtube/v3/videos";
	const query: string = `?id=${videoId}&key=${key}&part=snippet,statistics&fields=items(id,snippet,statistics)`;

	const response = await fetch(base + query);
	const result = await response.json();

	const data: IVideo = {
		id: result.items[0].id,
		type: "youtube",
		title: result.items[0].snippet.title,
		likes: result.items[0].statistics.likeCount,
		views: result.items[0].statistics.viewCount,
		thumbnail: result.items[0].snippet.thumbnails.medium.url,
		embed: `https://www.youtube.com/embed/${videoId}`,
		added: Date.now(),
		isFavourite: false,
	};

	return data;
};

export default youtubeApiClient;
