import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VideoContextProvider from "../../contexts/VideoContext";
import AddVideo from "../../components/AddVideo/AddVideo";

describe("test add video form", () => {
	test("input after submit should be empty", () => {
		render(<AddVideo />, { wrapper: VideoContextProvider });

		const addButton = screen.getByRole("button");
		const addVideo = screen.getByLabelText(/add/i);

		const fakeVideo = "https://www.youtube.com/watch?v=yJScmWi-thY";

		userEvent.clear(addVideo);
		userEvent.type(addVideo, fakeVideo);
		userEvent.click(addButton);

		expect(addVideo).not.toHaveValue();
	});

	test("there should be a message in case of error", async () => {
		render(<AddVideo />, { wrapper: VideoContextProvider });

		const addButton = screen.getByRole("button");
		const addVideo = screen.getByLabelText(/add/i);

		const fakeVideo = "https://";

		userEvent.clear(addVideo);
		userEvent.type(addVideo, fakeVideo);
		userEvent.click(addButton);

		const message = await screen.findByText(
			"It seems that something went wrong. Pleasy try again."
		);

		expect(message).toBeInTheDocument();
	});
});
