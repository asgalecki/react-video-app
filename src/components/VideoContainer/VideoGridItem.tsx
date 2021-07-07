import React, { useContext, useState } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import { VideoContext } from "../../contexts/VideoContext";
import VideoModal from "./VideoModal";
import "./styles/VideoGridItem.css";

const VideoGridItem = ({ video }: any) => {
	// || Context
	const { dispatchVideo } = useContext(VideoContext);

	// || State
	const [isFavourite, setIsFavourite] = useState(video.isFavourite);
	const [modal, setModal] = useState(false);

	// || Event handler
	const handleFavourite = () => {
		setIsFavourite(!isFavourite);
		dispatchVideo({ type: "FAVOURITE_VIDEO", video });
	};

	const toggleModal = () => {
		setModal(!modal);
	};

	// || Render
	return (
		<Card className='m-1 p-0 col-sm-3 video__card'>
			<VideoModal isOpen={modal} toggle={toggleModal} video={video} />
			<div className='m-2 d-flex justify-content-between'>
				<FontAwesomeIcon
					icon={faStar}
					data-testid='video-favourite'
					onClick={handleFavourite}
					className={`video__icon ${isFavourite ? "video__icon--active" : ""}`}
				/>
				<FontAwesomeIcon
					icon={faTrashAlt}
					className='video__icon'
					onClick={() => dispatchVideo({ type: "REMOVE_VIDEO", video })}
				/>
			</div>
			<CardImg
				top
				className='video__card--cursor'
				src={video.thumbnail}
				onClick={toggleModal}
				alt=''
			/>
			<CardBody className='p-2'>
				<CardTitle
					onClick={toggleModal}
					className='my-0 video__card--cursor video__title'
				>
					{video.title}
				</CardTitle>
				<CardText className='my-0'>
					{Number(video.views) !== 0
						? `${Number(video.views).toLocaleString()} views / `
						: ""}
					<span className='video__likes'>
						{Number(video.likes).toLocaleString()} likes
					</span>
				</CardText>
				<CardText className=' my-0 text-muted'>
					{`${formatDistanceToNow(video.added)} ago`}
				</CardText>
			</CardBody>
		</Card>
	);
};

export default VideoGridItem;
