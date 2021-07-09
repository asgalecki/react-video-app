import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ListGroup, Row } from "reactstrap";
import VideoListItem from "./VideoListItem";
import VideoGridItem from "./VideoGridItem";
import renderVideos from "../../helpers/renderVideos";
import IVideo from "../../interfaces/IVideo";

const Videos = ({ currentItems }: any) => {
	const { user }: any = useContext(UserContext);
	const { isFavourite, display }: any = user;

	const videoItem = (video: IVideo) => {
		return display ? (
			<VideoListItem video={video} key={video.id} />
		) : (
			<VideoGridItem video={video} key={video.id} />
		);
	};

	const videos = renderVideos(currentItems, videoItem, isFavourite);

	if (display) {
		return <ListGroup className='mx-auto text-light'>{videos}</ListGroup>;
	}

	return (
		<div className='mx-auto text-light' data-testid='grid-display'>
			<Row className='row-cols-3 justify-content-center'>{videos}</Row>
		</div>
	);
};

export default Videos;
