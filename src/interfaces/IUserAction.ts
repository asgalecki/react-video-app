export default interface IUserAction {
	type: string;
	select?: number;
	pages?: number[];
	isFavourite?: boolean;
	display?: boolean;
}
