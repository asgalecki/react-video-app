import React, { useContext, useEffect } from "react";
import { VideoContext } from "../../contexts/VideoContext";
import { ListGroup, Row } from "reactstrap";
import VideoListItem from "./VideoListItem";
import IVideo from "../../interfaces/IVideo";

const VideoContainer = () => {
	// || Context
	const { videos }: any = useContext(VideoContext);

	// || Render
	if (videos && videos.length) {
		return (
			<ListGroup className='mx-auto text-light'>
				{videos.map((video: IVideo) => {
					return <VideoListItem video={video} key={video.id} />;
				})}
			</ListGroup>
		);
	}

	return <p className='text-center'>No videos added yet.</p>;
};

export default VideoContainer;
