import React from "react";
import "./App.css";
import AddVideo from "./components/AddVideo/AddVideo";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import VideoContainer from "./components/VideoContainer/VideoContainer";
import VideoContextProvider from "./contexts/VideoContext";
import UserContextProvider from "./contexts/UserContext";
import VideoPagination from "./components/Pagination/Pagination";

function App() {
	return (
		<VideoContextProvider>
			<UserContextProvider>
				<div className='container'>
					<Header />
					<Navigation />
					<AddVideo />
					<VideoContainer />
					<VideoPagination />
				</div>
			</UserContextProvider>
		</VideoContextProvider>
	);
}

export default App;
