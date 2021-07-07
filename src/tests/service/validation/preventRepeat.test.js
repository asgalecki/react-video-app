import preventRepeat from "../../../service/validation/preventRepeat";
import fakeVideos from "../../../mocks/fakeVideos";

describe("Check is the video it in the db", () => {
	test("youtube", () => {
		let result = preventRepeat(fakeVideos, "477GoeCJB_Y");
		expect(result).toBe(false);

		result = preventRepeat(fakeVideos, "7lCDEYXw3mM");
		expect(result).toBe(true);
	});

	test("vimeo", () => {
		let result = preventRepeat(fakeVideos, "152233445");
		expect(result).toBe(false);

		result = preventRepeat(fakeVideos, "126100721");
		expect(result).toBe(true);
	});
});
