import getVideoId from "../../../service/validation/getVideoId";

describe("Get video id", () => {
	test("youtube url", () => {
		let result = getVideoId(
			"youtube",
			"https://www.youtube.com/watch?v=yJScmWi-thY"
		);
		expect(result).toBe("yJScmWi-thY");

		result = getVideoId("youtube", "http://youtu.be/-wtIMTCHWuI");
		expect(result).toBe("-wtIMTCHWuI");

		result = getVideoId(
			"youtube",
			"https://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index"
		);
		expect(result).toBe("0zM3nApSvMg");
	});

	test("vimeo url", () => {
		let result = getVideoId("vimeo", "https://vimeo.com/126100721");
		expect(result).toBe("126100721");

		result = getVideoId("vimeo", "126100721");
		expect(result).toBe("126100721");
	});
});
