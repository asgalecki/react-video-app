import React, { createContext, useState } from "react";

export const VideoContext: any = createContext({});

const VideoContextProvider = (props: any) => {
	const [videos, setVideos] = useState([
		{ id: "126100721" },
		{ id: "7lCDEYXw3mM" },
	]);

  const addVideo = (givenVideo: any): void => {
    const updatedVideos = videos;
    updatedVideos.push(givenVideo);
    setVideos(updatedVideos);
  }

	return (
		<VideoContext.Provider value={{ videos, addVideo }}>
			{props.children}
		</VideoContext.Provider>
	);
};

export default VideoContextProvider;