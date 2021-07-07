import IVideo from "../interfaces/IVideo";
const key: string = String(process.env.REACT_APP_VIMEO_KEY);

const vimeoApiClient = async (videoId: string) => {
	const base: string = `https://api.vimeo.com/videos/`;
	const query: string = `${videoId}`;

	const response = await fetch(base + query, {
		method: "GET",
		headers: {
			Authorization: `bearer ${key}`,
		},
	});
	const result = await response.json();

	const data: IVideo = {
		id: videoId,
		type: "vimeo",
		title: result.name,
		likes: result.metadata.connections.likes.total,
		views: 0, // vimeo doesn't offer views in basic membership
		thumbnail: result.pictures.sizes[2].link,
		embed: `https://player.vimeo.com/video/${videoId}`,
		added: Date.now(),
		isFavourite: false,
	};

	return data;
};

export default vimeoApiClient;
