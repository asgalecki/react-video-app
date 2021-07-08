import React from "react";
import "./App.css";
import AddVideo from "./components/AddVideo/AddVideo";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import VideoContainer from "./components/VideoContainer/VideoContainer";
import VideoContextProvider from "./contexts/VideoContext";

function App() {
	return (
		<VideoContextProvider>
			<div className='container'>
				<Header />
				<Navigation />
				<AddVideo />
				<VideoContainer />
			</div>
		</VideoContextProvider>
	);
}

export default App;
