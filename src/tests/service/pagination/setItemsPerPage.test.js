import setItemsPerPage from "../../../service/pagination/setItemsPerPage";

test("check that function gives proper value depends on displayType", () => {
	// default - list display
	let result = setItemsPerPage(true);
	expect(result).toBe(3);

	// grid display
	result = setItemsPerPage(false);
	expect(result).toBe(9);
});
