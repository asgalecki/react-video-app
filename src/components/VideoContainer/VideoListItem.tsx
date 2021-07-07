import React, { useContext, useState } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle, Row } from "reactstrap";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import { VideoContext } from "../../contexts/VideoContext";
import "./styles/VideoListItem.css";
import IVideo from "../../interfaces/IVideo";

const VideoListItem = (props: { video: IVideo; key: string }) => {
	const { video } = props;

	// || Context
	const { dispatchVideo } = useContext(VideoContext);

	// || State
	const [isFavourite, setIsFavourite] = useState(video.isFavourite);

	// || Event handler
	const handleFavourite = () => {
		setIsFavourite(!isFavourite);
		dispatchVideo({ type: "FAVOURITE_VIDEO", video });
	};

	const handleRemove = () => {
		dispatchVideo({ type: "REMOVE_VIDEO", video });
	};

	// || Render
	return (
		<Card className='my-2 video__card'>
			<Row className='no-gutters'>
				<CardImg
					width='100%'
					className='col-sm-5 p-2 video__card--cursor'
					src={video.thumbnail}
					alt=''
				/>
				<CardBody className='ml-3 my-2 p-0 col-sm-6 d-flex flex-column justify-content-between'>
					<div>
						<CardTitle className='video__card--cursor'>{video.title}</CardTitle>
						<CardText>
							{Number(video.views) !== 0
								? `${Number(video.views).toLocaleString()} views / `
								: ""}
							{Number(video.likes).toLocaleString()} likes
						</CardText>
						<CardText className='text-muted'>
							{`${formatDistanceToNow(video.added)} ago`}
						</CardText>
					</div>
					<div className='mt-2 mr-2 d-flex justify-content-between'>
						<FontAwesomeIcon
							icon={faStar}
							data-testid='video-favourite'
							className={`video__icon ${
								isFavourite ? "video__icon--active" : ""
							}`}
							onClick={handleFavourite}
						/>
						<FontAwesomeIcon
							icon={faTrashAlt}
							className='video__icon'
							onClick={handleRemove}
						/>
					</div>
				</CardBody>
			</Row>
		</Card>
	);
};

export default VideoListItem;
