import IVideo from "./IVideo";

export default interface IVideoAction {
	type: string;
	video?: IVideo | undefined;
	sortFilter?: string;
}