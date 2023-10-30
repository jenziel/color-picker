import "./App.css";
import Profile from "../Profile/Profile";
import PreviewText from "../PreviewText/PreviewText";
import React from 'react'
import Header from "../Header/Header";
import ColorChart from "../ColorChart/ColorChart";

function App() {
  return (
    <main>
      <Header />
      <div className='App'>
        <div className='inputs-container'>
          <PreviewText />
        </div>
        <Profile />
        <ColorChart />
        <Profile />
      </div>
    </main>
  );
}

export default App;
