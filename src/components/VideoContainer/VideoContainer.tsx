import React, { useContext, useEffect } from "react";
import { VideoContext } from "../../contexts/VideoContext";
import { UserContext } from "../../contexts/UserContext";
import Videos from "./Videos";
import pagination from "../../service/pagination/pagination";

const VideoContainer = () => {
	// || Context
	const { videos }: any = useContext(VideoContext);
	const { user, dispatchUser }: any = useContext(UserContext);
	const { selected, isFavourite, display }: any = user;

	// || Service
	const { currentItems, pages } = pagination(
		videos,
		selected,
		display,
		isFavourite
	);

	useEffect(() => {
		dispatchUser({ type: "UPDATE_PAGES", pages: pages });
	}, [videos, display, isFavourite]);

	// || Render
	if (!currentItems.length && isFavourite) {
		return <p className='text-center'>You have no favourite videos.</p>;
	}

	if (currentItems.length) {
		return <Videos currentItems={currentItems} />;
	}

	return <p className='text-center'>No videos added yet.</p>;
};

export default VideoContainer;
