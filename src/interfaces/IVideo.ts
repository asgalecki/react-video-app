export default interface IVideo {
	id: string;
	type: string;
	title: string;
	likes: number | string;
	views: number | string;
	thumbnail: string;
	embed: string;
	added: number;
	isFavourite: boolean;
}
