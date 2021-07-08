import IVideo from "../interfaces/IVideo";
import IIndexable from "../interfaces/IIndexable";
import IVideoAction from "../interfaces/IVideoAction";
import IVideoState from "../interfaces/IVideoState";

const strategies: IIndexable = {
	ADD_VIDEO: addVideo,
	REMOVE_VIDEO: removeVideo,
	REMOVE_ALL_VIDEOS: removeAllVideos,
	SORT_VIDEOS: sortVideos,
	FAVOURITE_VIDEO: favouriteVideo,
	__default__: (state: IVideoState) => state,
};

export const VideoReducer = (state: IVideoState, action: IVideoAction) => {
	const transformer = strategies[action.type] ?? strategies.__default__;
	return transformer(state, action);
};

function addVideo(state: IVideoState, action: IVideoAction) {
	const videos = [action.video, ...state];
	return videos;
}

function removeVideo(state: IVideoState, action: IVideoAction) {
	const videos = state.filter((video: IVideo) => video.id !== action.video!.id);
	return videos;
}

function removeAllVideos() {
	const videos: [] = [];
	return videos;
}

function sortVideos(state: IVideoState, action: IVideoAction) {
	if (action.sortFilter === "latest") {
		return [...state].sort((a, b) => b.added - a.added);
	}
	if (action.sortFilter === "oldest") {
		return [...state].sort((a, b) => a.added - b.added);
	}
}

function favouriteVideo(state: IVideoState, action: IVideoAction) {
	const videoIndex = state.findIndex(
		(element) => element.id === action.video!.id
	);
	const videos = [...state];

	videos[videoIndex] = {
		...videos[videoIndex],
		isFavourite: !videos[videoIndex].isFavourite,
	};

	return videos;
}
