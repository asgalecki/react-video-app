import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VideoContextProvider from "../../../contexts/VideoContext";
import VideoGridItem from "../../../components/VideoContainer/VideoGridItem";
import fakeVideos from "../../../mocks/fakeVideos";

describe("test VideoGridItem component", () => {
	test("toggle modal", () => {
		render(<VideoGridItem video={fakeVideos[0]} />, {
			wrapper: VideoContextProvider,
		});

		// modal triggers
		const videoImg = screen.getByRole("img");
		expect(videoImg).toBeInTheDocument();

		const videoTitle = screen.getByText(fakeVideos[0].title);
		expect(videoTitle).toBeInTheDocument();

		// modal default
		let videoModal = screen.queryByRole("dialog");
		expect(videoModal).not.toBeInTheDocument();

		// trigger modal
		userEvent.click(videoTitle);
		videoModal = screen.queryByRole("dialog");
		expect(videoModal).toBeInTheDocument();
	});

	test("isFavourite for video displays correctly", () => {
		render(
			<VideoContextProvider>
				<VideoGridItem video={fakeVideos[0]} />
			</VideoContextProvider>
		);

		const videoFavourite = screen.getByTestId("video-favourite");
		expect(videoFavourite).not.toHaveClass("video__icon--active");
	});
});
