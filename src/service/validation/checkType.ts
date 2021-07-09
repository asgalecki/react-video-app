import IIndexable from "../../interfaces/IIndexable";

const checkType = (videoURI: string) => {
	const regex: IIndexable = {
		youtube:
			// eslint-disable-next-line no-useless-escape
			/(((https?:\/\/)?(www\.|m\.|youtu\.)?(youtube(-nocookie)?|be)\.?(com)?\/.*)|(^(watch\?)?(v=)?[\w\-]{11}))/,
		vimeo: /(((https?:\/\/)?vimeo\.com\/\d{9}$)|(^\d{9}$))/,
	};
	const types: [string, string] = ["youtube", "vimeo"];

	for (let i: number = 0; i < types.length; i++) {
		let check: boolean = regex[types[i]].test(videoURI);
		if (check) {
			return types[i];
		}
	}

	return "unknown";
};

export default checkType;
