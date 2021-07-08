const paginationEvent = (order: string, selected: number, pages: number[]) => {
	const first: number = 1;
	const previous: number = selected - 1;
	const next: number = selected + 1;
	const last: number = pages.length;

	switch (order) {
		case "«":
			return first;
		case "‹":
			if (previous === 0) {
				return first;
			}
			return previous;
		case "›":
			if (next > pages.length) {
				return pages.length;
			}
			return next;
		case "»":
			return last;
		default:
			return Number(order);
	}
};

export default paginationEvent;
