import React from 'react';
import './App.css';

// Components
import Nav from './Nav';
import Dev from './Components/Dev';
import Art from './Components/Art';
import Music from './Components/Music';

function App() {
  return (
    <div className="App">
      <div className="App-sidebar">
        <Nav />
      </div>
      <div className="App-content">
        <div id="dev">
          <Dev />
        </div>
        <div id="art">
          <Art />
        </div>
        {/* <div id="music">
          <Music />
        </div> */}
      </div>
    </div>
  );
}

export default App;
