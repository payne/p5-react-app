import React from 'react';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <P5Wrapper sketch={sketch} />

        </>
      </header>
    </div>
  );
}

export default App;
