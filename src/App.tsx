import React from 'react';
import './App.css';
import AddVideo from './components/AddVideo/AddVideo';
import Header from "./components/Header/Header";
import VideoContextProvider from './contexts/VideoContext';

function App() {
  return (
    <VideoContextProvider>
      <div className='container'>
        <Header />
        <AddVideo />
      </div>
    </VideoContextProvider>
  );
}

export default App;
