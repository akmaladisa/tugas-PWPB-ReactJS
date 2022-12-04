import './App.css';
import Intro from './component/Intro';
import NavigationBar from './component/NavigationBar';
import BestGame from './component/BestGame';
import TrendGame from './component/TrendGame.';
import React from 'react';
import Contact from './component/Contact';

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar></NavigationBar>
        <Intro></Intro>
      </div>
      <div className="trending">
        <TrendGame></TrendGame>
      </div>
      <div className="best">
        <BestGame></BestGame>
      </div>
      <div className="contact">
        <Contact></Contact>
      </div>  
    </div>
  )
}

export default App;
