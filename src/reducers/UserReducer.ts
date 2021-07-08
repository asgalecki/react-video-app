import IUserAction from "../interfaces/IUserAction";
import IIndexable from "../interfaces/IIndexable";
import IUser from "../interfaces/IUser";

const strategies: IIndexable = {
	TOGGLE_FAVOURITE: toggleFavourite,
	__default__: (state: IUser) => state,
};

export const UserReducer = (state: IUser, action: IUserAction) => {
	const transformer = strategies[action.type] ?? strategies.__default__;
	return transformer(state, action);
};

function toggleFavourite(state: IUser, action: IUserAction) {
	const updatedState: IUser = Object.assign({}, state, {
		isFavourite: action.isFavourite,
	});
	console.log(updatedState);
	return updatedState;
}
