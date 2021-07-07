import React, { createContext, useReducer, useEffect } from "react";
import { VideoReducer } from "../reducers/VideoReducer";

export const VideoContext: any = createContext({});

const VideoContextProvider = (props: any) => {
	const [videos, dispatchVideo] = useReducer(VideoReducer, []);

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
