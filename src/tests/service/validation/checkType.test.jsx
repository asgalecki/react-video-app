import checkType from "../../../service/validation/checkType";

describe("Check given video url or id", () => {
	test("youtube url and id", () => {
		let result = checkType("testing value");
		expect(result).toBe("unknown");

		// full uri
		result = checkType("https://www.youtube.com/watch?v=yJScmWi-thY");
		expect(result).toBe("youtube");

		// id
		result = checkType("vJ3a_AuEW18");
		expect(result).toBe("youtube");
	});

	test("vimeo url and id", () => {
		let result = checkType("https://vimeo.com/126100721");
		expect(result).toBe("vimeo");

		result = checkType("126100721");
		expect(result).toBe("vimeo");
	});
});
