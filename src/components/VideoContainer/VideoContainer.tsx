import React, { useContext, useEffect } from "react";
import { VideoContext } from "../../contexts/VideoContext";
import { UserContext } from "../../contexts/UserContext";
import { ListGroup, Row } from "reactstrap";
import VideoListItem from "./VideoListItem";
import VideoGridItem from "./VideoGridItem";
import IVideo from "../../interfaces/IVideo";

const VideoContainer = () => {
	// || Context
	const { videos }: any = useContext(VideoContext);
	const { user, dispatchUser }: any = useContext(UserContext);
	const { isFavourite }: any = user;

	// || Render

	// if (videos && videos.length) {
	// 	return (
	// 		<ListGroup className='mx-auto text-light'>
	// 			{videos.map((video: IVideo) => {
	// 				return <VideoListItem video={video} key={video.id} />;
	// 			})}
	// 		</ListGroup>
	// 	);
	// }

	if (videos && videos.length) {
		return (
			<div className='mx-auto text-light' data-testid='grid-display'>
				<Row className='row-cols-3 justify-content-center'>
					{videos
						.filter((video: IVideo) => {
							if (!isFavourite) {
								return video;
							}
							return video.isFavourite === isFavourite;
						})
						.map((video: IVideo) => {
							return <VideoGridItem video={video} key={video.id} />;
						})}
				</Row>
			</div>
		);
	}

	return <p className='text-center'>No videos added yet.</p>;
};

export default VideoContainer;
