import youtubeApiClient from "../api/youtubeApiClient";
import vimeoApiClient from "../api/vimeoApiClient";

export const getVideo = async (type: string, videoId: string) => {
	const video = await makeApiCall(type, videoId)
		.then((res) => {
			return res;
		})
		.catch((err) => console.log(err));

	return video;
};

const makeApiCall = async (type: string, videoId: string) => {
	let video;

	switch (type) {
		case "youtube":
			video = await youtubeApiClient(videoId);
			break;
		case "vimeo":
			video = await vimeoApiClient(videoId);
			break;
		default:
			break;
	}

	return video;
};
