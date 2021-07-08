import { render, screen } from "@testing-library/react";
import UserContextProvider, { UserContext } from "../../contexts/UserContext";
import Pagination from "../../components/Pagination/Pagination";

describe("test pagination", () => {
	test("show no pagination when no pages/not enough pages", () => {
		render(
			<UserContextProvider>
				<Pagination />
			</UserContextProvider>
		);

		const noPaginationDiv = screen.getByTestId("no-pagination");

		expect(noPaginationDiv).toBeInTheDocument();
	});

	test("pagination is displayed properly", () => {
		const user = {
			selected: 1,
			pages: [1, 2, 3, 4, 5],
			isFavourite: false,
			display: true,
		};

		render(
			<UserContext.Provider value={{ user }}>
				<Pagination />
			</UserContext.Provider>
		);

		const noPaginationDiv = screen.queryByTestId("no-pagination");
		expect(noPaginationDiv).not.toBeInTheDocument();

		const buttonOne = screen.getByText("1");
		const buttonFive = screen.getByText("5");

		const buttonPrevious = screen.getByText("‹");
		const buttonLast = screen.getByText("»");

		expect(buttonOne).toBeInTheDocument();
		expect(buttonFive).toBeInTheDocument();
		expect(buttonPrevious).toBeInTheDocument();
		expect(buttonLast).toBeInTheDocument();

		expect(buttonOne.parentElement).toHaveClass("pagination__selected");
	});
});
