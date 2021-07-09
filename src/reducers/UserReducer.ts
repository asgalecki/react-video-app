import IUserAction from "../interfaces/IUserAction";
import IIndexable from "../interfaces/IIndexable";
import IUser from "../interfaces/IUser";

const strategies: IIndexable = {
	SELECT: select,
	UPDATE_PAGES: updatePages,
	TOGGLE_FAVOURITE: toggleFavourite,
	TOGGLE_DISPLAY: toggleDisplay,
	__default__: (state: IUser) => state,
};

export const UserReducer = (state: IUser, action: IUserAction) => {
	const transformer = strategies[action.type] ?? strategies.__default__;
	return transformer(state, action);
};

function select(state: IUser, action: IUserAction) {
	const updatedState: IUser = { ...state, selected: action.select };
	return updatedState;
}

function updatePages(state: IUser, action: IUserAction) {
	const updatedState: IUser = { ...state, pages: action.pages };
	return updatedState;
}

function toggleFavourite(state: IUser, action: IUserAction) {
	const updatedState: IUser = { ...state, isFavourite: action.isFavourite };
	return updatedState;
}

function toggleDisplay(state: IUser, action: IUserAction) {
	let selected = state.selected;
	if (action.display === false) {
		selected = 1;
	}
	const updatedState: IUser = { ...state, selected, display: action.display };
	return updatedState;
}
