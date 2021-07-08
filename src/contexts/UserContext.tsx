import React, { createContext, useReducer } from "react";
import { UserReducer } from "../reducers/UserReducer";

export const UserContext: any = createContext({});

const UserContextProvider = (props: any) => {
	const [user, dispatchUser] = useReducer(UserReducer, {
		isFavourite: false,
	});

	return (
		<UserContext.Provider value={{ user, dispatchUser }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
