import React, { useContext, useState } from "react";
import { VideoContext } from "../../contexts/VideoContext";
import validation from "../../service/validation/validation";
import {
	Button,
	Fade,
	Form,
	FormGroup,
	Input,
	InputGroup,
	InputGroupAddon,
	Label,
} from "reactstrap";
import "./styles/AddVideo.css";

const AddVideo = () => {
	// || Context
	const { videos, addVideo } = useContext(VideoContext);

	// || State
	const [videoURI, setVideoURI] = useState("");
	const [message, setMessage] = useState("");

	// || Event handler
	const handleSubmit = (e: any): void => {
		e.preventDefault();
		const { type, videoId, isRepeated } = validation(videos, videoURI);
		setVideoURI("");

		if (!isRepeated && type !== "unknown" && videoId !== "error") {
			addVideo({id: videoId});
			setMessage("");
			return;
		}

		isRepeated
			? setMessage("You already have this video added.")
			: setMessage("It seems that something went wrong. Pleasy try again.");
	};

	// || Render
	return (
		<Form
			onSubmit={handleSubmit}
			className='my-4 mx-auto text-center add-video__form'
		>
			<FormGroup>
				<Label htmlFor='addVideo' className='add-video__label'>
					Add Video
				</Label>
				<InputGroup>
					<Input
						type='text'
						name='addVideo'
						id='addVideo'
						className='m-auto form-control add-video__input'
						value={videoURI}
						onChange={(e) => setVideoURI(e.target.value)}
						required
					/>
					<InputGroupAddon addonType='append'>
						<Button type='submit'>+</Button>
					</InputGroupAddon>
				</InputGroup>
			</FormGroup>
			<Fade in={message ? true : false}>
				<p className='my-2 text-center add-video__message'>{message}</p>
			</Fade>
		</Form>
	);
};

export default AddVideo;
