import React, { createContext, useReducer } from "react";
import { UserReducer } from "../reducers/UserReducer";

export const UserContext: any = createContext({});

const UserContextProvider = (props: any) => {
	const [user, dispatchUser] = useReducer(UserReducer, {
		selected: 1,
		pages: [],
		isFavourite: false,
		display: true,
	});

	return (
		<UserContext.Provider value={{ user, dispatchUser }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
