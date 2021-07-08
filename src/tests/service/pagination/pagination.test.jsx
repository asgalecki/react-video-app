import pagination from "../../../service/pagination/pagination";
import fakeVideos from "../../../mocks/fakeVideos";

describe("test paginationService behaviour", () => {
	test("function should not trigger pagination if there is not enough videos", () => {
		// no videos
		let videos = [];
		let selected = 1;
		let displayType = true;
		let isFavourite = false;

		let result = pagination(videos, selected, displayType, isFavourite);

		expect(result).toEqual({ currentItems: [], pages: [] });

		// 3 videos && list display
		videos = fakeVideos;
		selected = 1;
		displayType = true;
		isFavourite = false;

		result = pagination(videos, selected, displayType, isFavourite);

		expect(result).toEqual({ currentItems: videos, pages: [] });

		// 3 videos && list display && isFavourite
		videos = [
			{ id: 1, isFavourite: true },
			{ id: 2, isFavourite: true },
			{ id: 3, isFavourite: true },
		];
		selected = 1;
		displayType = true;
		isFavourite = false;

		result = pagination(videos, selected, displayType, isFavourite);

		expect(result).toEqual({ currentItems: videos, pages: [] });

		// 9 videos && grid display
		videos = [
			...fakeVideos,
			...fakeVideos,
			...fakeVideos,
			...fakeVideos,
			fakeVideos[0],
		];
		selected = 1;
		displayType = false;
		isFavourite = false;

		result = pagination(videos, selected, displayType, isFavourite);

		expect(result).toEqual({ currentItems: videos, pages: [] });
	});

	test("function should trigger pagination if there is enough videos", () => {
		// 6 videos && list display
		let videos = [...fakeVideos, ...fakeVideos, ...fakeVideos];
		let selected = 1;
		let displayType = true;
		let isFavourite = false;

		let result = pagination(videos, selected, displayType, isFavourite);

		expect(result).toEqual({
			currentItems: [...fakeVideos, fakeVideos[0]],
			pages: [1, 2],
		});

		// 4 videos && list display && isFavourite
		videos = [
			{ id: 1, isFavourite: true },
			{ id: 2, isFavourite: true },
			{ id: 3, isFavourite: true },
			{ id: 4, isFavourite: true },
		];
		selected = 1;
		displayType = true;
		isFavourite = true;

		result = pagination(videos, selected, displayType, isFavourite);

		let currentItems = videos.slice(0, 3);

		expect(result).toEqual({ currentItems, pages: [1, 2] });

		// 10 videos && grid display
		videos = [
			...fakeVideos,
			...fakeVideos,
			...fakeVideos,
			...fakeVideos,
			...fakeVideos,
		];
		selected = 1;
		displayType = false;
		isFavourite = false;

		result = pagination(videos, selected, displayType, isFavourite);

		currentItems = videos.slice(0, 9);

		expect(result).toEqual({ currentItems, pages: [1, 2] });

		// 6 videos && list display selected 2
		videos = [...fakeVideos, ...fakeVideos, ...fakeVideos];
		selected = 2;
		displayType = true;
		isFavourite = false;

		result = pagination(videos, selected, displayType, isFavourite);

		currentItems = videos.slice(3);

		expect(result).toEqual({ currentItems, pages: [1, 2] });
	});
});
