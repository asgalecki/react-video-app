import { render, screen } from "@testing-library/react";
import { VideoContext } from "../../../contexts/VideoContext";
import VideoContainer from "../../../components/VideoContainer/VideoContainer";
import fakeVideos from "../../../mocks/fakeVideos";

describe.skip("test VideoContainer component", () => {
	test("no videos & no favourite (default) filter", () => {
		const videos = [];
		render(
			<VideoContext.Provider value={{ videos }}>
				<VideoContainer />
			</VideoContext.Provider>
		);

		const para = screen.getByText(/No videos added yet/i);
		expect(para).toBeInTheDocument();
	});

	test("one video & no favourite (default) filter", () => {
		const videos = [fakeVideos[0]];
		render(
			<VideoContext.Provider value={{ videos }}>
				<VideoContainer />
			</VideoContext.Provider>
		);

		const videoList = screen.getByRole("list");
		expect(videoList).toBeInTheDocument();

		const videoTitle = screen.getByText(/Star Trek/i);
		expect(videoTitle).toBeInTheDocument();
	});
});
