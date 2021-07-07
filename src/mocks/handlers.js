import { rest } from "msw";

export const handlers = [
	rest.get("https://www.googleapis.com/youtube/v3/videos", (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				items: [
					{
						id: "p5kcBxL7-qI",
						type: "youtube",
						title: "Star Trek: The Next Generation theme (HQ)",
						likes: "11431",
						views: "1719938",
						thumbnail: "https://i.ytimg.com/vi/p5kcBxL7-qI/mqdefault.jpg",
						embed: "https://www.youtube.com/embed/p5kcBxL7-qI",
						added: Date.now(),
						isFavourite: false,
					},
				],
			})
		);
	}),
];
