import React from 'react';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
// import sketch from './sketch'
import golsketch from './gol-sketch';
import SoundSketch from './sound-sketch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          {/* <P5Wrapper sketch={sketch} /> */}
          {/* <P5Wrapper sketch={golsketch} /> */}
          <P5Wrapper sketch={SoundSketch} />
        </>
      </header>
    </div>
  );
}

export default App;
