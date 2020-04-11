import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './componets/hello';
import LikeButton from './componets/likeButton';
import MouseTracker from './componets/MouseTracker'
import useMousePosition from './hooks/useMousePosition'
import useMousePositin from './hooks/useMousePosition';


const App: React.FC = () => {
  const [show, setShow] = useState(true)
  const positions = useMousePositin()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={() => { setShow(!show) }}>toggle Trocker</button>
        </p>
        <Hello />
        <p>X: {positions.x}, Y:{positions.y}</p>
        <LikeButton />
        {/* {show && <MouseTracker/>} */}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
