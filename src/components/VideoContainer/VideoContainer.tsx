import React, { useContext, useEffect } from "react";
import { VideoContext } from "../../contexts/VideoContext";
import { UserContext } from "../../contexts/UserContext";
import { ListGroup, Row } from "reactstrap";
import VideoListItem from "./VideoListItem";
import VideoGridItem from "./VideoGridItem";
import IVideo from "../../interfaces/IVideo";
import pagination from "../../service/pagination/pagination";

const VideoContainer = () => {
	// || Context
	const { videos }: any = useContext(VideoContext);
	const { user, dispatchUser }: any = useContext(UserContext);
	const { selected, isFavourite, display }: any = user;

	// || Service
	const { currentItems, pages } = pagination(videos, selected, display);

	useEffect(() => {
		dispatchUser({ type: "UPDATE_PAGES", pages: pages });
	}, [videos, display, isFavourite]);

	// || Render
	if (currentItems.length && display) {
		return (
			<ListGroup className='mx-auto text-light'>
				{currentItems
					.filter((video: IVideo) => {
						if (!isFavourite) {
							return video;
						}
						return video.isFavourite === isFavourite;
					})
					.map((video: IVideo) => {
						return <VideoListItem video={video} key={video.id} />;
					})}
			</ListGroup>
		);
	}

	if (currentItems.length && !display) {
		return (
			<div className='mx-auto text-light' data-testid='grid-display'>
				<Row className='row-cols-3 justify-content-center'>
					{currentItems
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
