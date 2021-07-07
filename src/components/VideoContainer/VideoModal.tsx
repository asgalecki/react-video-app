import React from "react";
import { Modal, ModalBody } from "reactstrap";
import "./styles/VideoModal.css";

const VideoModal = ({ isOpen, toggle, video }: any) => {
	return (
		<Modal
			isOpen={isOpen}
			toggle={toggle}
			style={{
				marginTop: `${window.scrollY + 60}px`,
			}}
			className='modal__container modal__container--color modal__container--border'
			contentClassName='modal__container--border'
			backdropClassName='modal__container--size'
		>
			<ModalBody className='p-0 modal__body modal__body--border'>
				<button className='modal__body modal__close-btn' onClick={toggle}>
					&times;
				</button>
				<div className='embed-responsive embed-responsive-16by9'>
					<iframe
						src={video.embed}
						title={video.title}
						frameBorder='0'
						className='embed-responsive-item'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen'
						allowFullScreen
						sandbox='allow-scripts allow-same-origin'
					></iframe>
				</div>
			</ModalBody>
		</Modal>
	);
};

export default VideoModal;
