import { render, screen } from "@testing-library/react";
import Header from "../../components/Header/Header";

test("display 'Video App' heading", () => {
	render(<Header />);

	const header = screen.getByRole("heading", { name: /video app/i });
	expect(header).toBeInTheDocument();
});
