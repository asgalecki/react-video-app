import { render, screen } from "@testing-library/react";
import VideoContextProvider, {
	VideoContext,
} from "../../../contexts/VideoContext";
import UserContextProvider, {
	UserContext,
} from "../../../contexts/UserContext";
import VideoContainer from "../../../components/VideoContainer/VideoContainer";
import fakeVideos from "../../../mocks/fakeVideos";

describe("test VideoContainer component", () => {
	test("no videos & no favourite (default) filter", () => {
		const videos = [];
		render(
			<VideoContext.Provider value={{ videos }}>
				<UserContextProvider>
					<VideoContainer />
				</UserContextProvider>
			</VideoContext.Provider>
		);

		const para = screen.getByText(/No videos added yet/i);
		expect(para).toBeInTheDocument();
	});

	test("one video & no favourite (default) filter", () => {
		const videos = [fakeVideos[0]];
		render(
			<VideoContext.Provider value={{ videos }}>
				<UserContextProvider>
					<VideoContainer />
				</UserContextProvider>
			</VideoContext.Provider>
		);

		const videoList = screen.getByRole("list");
		expect(videoList).toBeInTheDocument();

		const videoTitle = screen.getByText(/Star Trek/i);
		expect(videoTitle).toBeInTheDocument();
	});

	test("one video (favourite) & favourite filter", () => {
		const videos = [fakeVideos[1]];
		const dispatchUser = jest.fn();
		const user = {
			selected: 1,
			pages: [],
			isFavourite: true,
			display: true,
		};

		render(
			<VideoContext.Provider value={{ videos }}>
				<UserContext.Provider value={{ user, dispatchUser }}>
					<VideoContainer />
				</UserContext.Provider>
			</VideoContext.Provider>
		);

		const videoList = screen.getByRole("list");
		expect(videoList).toBeInTheDocument();

		const videoTitle = screen.getByText(/Fall in love with Poland/i);
		expect(videoTitle).toBeInTheDocument();
	});

	test("one video & no favourite (default) filter & grid display", () => {
		const videos = [fakeVideos[0]];
		const dispatchUser = jest.fn();
		const user = {
			selected: 1,
			pages: [],
			isFavourite: false,
			display: false,
		};

		render(
			<VideoContext.Provider value={{ videos }}>
				<UserContext.Provider value={{ user, dispatchUser }}>
					<VideoContainer />
				</UserContext.Provider>
			</VideoContext.Provider>
		);

		const videoList = screen.queryByRole("list");
		expect(videoList).not.toBeInTheDocument();

		const videoGrid = screen.getByTestId("grid-display");
		expect(videoGrid).toBeInTheDocument();

		const videoTitle = screen.getByText(/Star Trek/i);
		expect(videoTitle).toBeInTheDocument();
	});

	test("one video (favourite) & favourite filter & grid display", () => {
		const videos = [fakeVideos[1]];
		const dispatchUser = jest.fn();
		const user = {
			selected: 1,
			pages: [],
			isFavourite: true,
			display: false,
		};

		render(
			<VideoContext.Provider value={{ videos }}>
				<UserContext.Provider value={{ user, dispatchUser }}>
					<VideoContainer />
				</UserContext.Provider>
			</VideoContext.Provider>
		);

		const videoGrid = screen.getByTestId("grid-display");
		expect(videoGrid).toBeInTheDocument();

		const videoTitle = screen.getByText(/Fall in love with Poland/i);
		expect(videoTitle).toBeInTheDocument();
	});
});
