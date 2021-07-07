import React, { createContext, useReducer, useEffect } from "react";
import { VideoReducer } from "../reducers/VideoReducer";

export const VideoContext: any = createContext({});

const VideoContextProvider = (props: any) => {
	const [videos, dispatchVideo] = useReducer(VideoReducer, [], () => {
		const localData = localStorage.getItem("videos");
		return localData ? JSON.parse(localData) : [];
	});

	useEffect(() => {
		localStorage.setItem("videos", JSON.stringify(videos));
	}, [videos]);

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
