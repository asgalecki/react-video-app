const preventRepeat = (videos: [], videoId: string) => {
	const isRepeated: boolean = videos.some((video: any) => video.id === videoId);
	return isRepeated;
};

export default preventRepeat;
