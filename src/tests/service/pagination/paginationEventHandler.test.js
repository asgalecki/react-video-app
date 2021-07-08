import paginationEventHandler from "../../../service/pagination/paginationEventHandler";

test("check pagination event trigerred by the user", () => {
	let result = paginationEventHandler("›", 2, [1, 2, 3]);
	expect(result).toBe(3);

	result = paginationEventHandler("‹", 2, [1, 2, 3]);
	expect(result).toBe(1);

	result = paginationEventHandler("«", 3, [1, 2, 3]);
	expect(result).toBe(1);

	result = paginationEventHandler("»", 3, [1, 2, 3]);
	expect(result).toBe(3);

	result = paginationEventHandler("»", 2, [1, 2, 3]);
	expect(result).toBe(3);

	result = paginationEventHandler("«", 2, [1, 2, 3]);
	expect(result).toBe(1);
});
