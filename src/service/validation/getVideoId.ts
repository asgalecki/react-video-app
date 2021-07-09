import IIndexable from "../../interfaces/IIndexable";

const getVideoId = (type: string, videoURI: string) => {
	const regex: IIndexable = {
		// eslint-disable-next-line no-useless-escape
		youtube: /[\w\d\-]{11}/,
		vimeo: /[\d]{9}/,
	};

	const videoId = videoURI.match(regex[type]);
	return videoId![0] || "error";
};

export default getVideoId;
