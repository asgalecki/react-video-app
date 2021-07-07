import React, { createContext, useReducer, useEffect } from "react";
import { VideoReducer } from "../reducers/VideoReducer";

export const VideoContext: any = createContext({});

const initialState = [
	{
		id: "p5kcBxL7-qI",
		type: "youtube",
		title: "Star Trek: The Next Generation theme (HQ)",
		likes: "11431",
		views: "1719938",
		thumbnail: "https://i.ytimg.com/vi/p5kcBxL7-qI/mqdefault.jpg",
		embed: "https://www.youtube.com/embed/p5kcBxL7-qI",
		added: Date.now(),
		isFavourite: false,
	},
	{
		id: "150879953",
		type: "vimeo",
		title: "Fall in love with Poland",
		likes: "602",
		views: "0",
		thumbnail: "https://i.vimeocdn.com/video/550480361_295x166?r=pad",
		embed: "https://player.vimeo.com/video/150879953",
		added: Date.now(),
		isFavourite: true,
	},
];

const VideoContextProvider = (props: any) => {
	const [videos, dispatchVideo] = useReducer(VideoReducer, initialState);

	return (
		<VideoContext.Provider
			value={{
				videos,
				dispatchVideo,
			}}
		>
			{props.children}
		</VideoContext.Provider>
	);
};

export default VideoContextProvider;
