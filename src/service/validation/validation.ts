import checkType from "./checkType";
import getVideoId from "./getVideoId";
import preventRepeat from "./preventRepeat";

const validation = (videos: [], videoURI: string) => {
	const type: string = checkType(videoURI)!;
	const videoId: string = getVideoId(type, videoURI);
	const isRepeated: boolean = preventRepeat(videos, videoId);

	return { type, videoId, isRepeated };
};

export default validation;
