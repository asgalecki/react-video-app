import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VideoContextProvider from "../../../contexts/VideoContext";
import VideoListItem from "../../../components/VideoContainer/VideoListItem";
import fakeVideos from "../../../mocks/fakeVideos";

describe("test VideoListItem component", () => {
	test("isFavourite for video displays correctly", () => {
		render(
			<VideoContextProvider>
				<VideoListItem video={fakeVideos[1]} />
			</VideoContextProvider>
		);

		const videoFavourite = screen.getByTestId("video-favourite");
		expect(videoFavourite).toHaveClass("video__icon--active");
	});
});
