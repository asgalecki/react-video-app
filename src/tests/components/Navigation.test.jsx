import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VideoContextProvider from "../../contexts/VideoContext";
import UserContextProvider from "../../contexts/UserContext";
import Navigation from "../../components/Navigation/Navigation";

describe("test navigation", () => {
	test("favourite filter toggle after click", () => {
		render(
			<VideoContextProvider>
				<UserContextProvider>
					<Navigation />
				</UserContextProvider>
			</VideoContextProvider>
		);

		const favouriteFilter = screen.getByTestId("filter-favourite");

		userEvent.click(favouriteFilter);
		expect(favouriteFilter).toHaveClass("navigation__icon--active");

		userEvent.click(favouriteFilter);
		expect(favouriteFilter).not.toHaveClass("navigation__icon--active");
	});
});
