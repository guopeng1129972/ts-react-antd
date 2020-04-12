import React, { useState, useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './componets/hello';
// import LikeButton from './componets/likeButton';
import LikeButton2 from './componets/likeButton2';
// import MouseTracker from './componets/MouseTracker'
// import useMousePosition from './hooks/useMousePosition'
// import useURLLoader from './hooks/useURLLoader'

interface IShowResult {
  message: string;
  status: string;
}

interface IThemProps {
  [key: string]: { color: string; background: string; }
}

const themes: IThemProps = {
  'light': {
    color: '#000',
    background: '#eee'
  },
  'dark': {
    color: '#fff',
    background: '#222'
  }
}

//导出，如果子组件需要使用，就在子组件中引用useContext并导入此对象
export const ThemesContext = React.createContext(themes.light)
const App: React.FC = () => {

  const [show, setShow] = useState(true)
  // const positions = useMousePositin()
  // const [data, loading] = useURLLoader('https://uploadbeta.com/api/pictures/random/', [show])
  // const dogResult = data as IShowResult;
  return (
    <div className="App">
      <ThemesContext.Provider value={themes.dark}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            <button onClick={() => { setShow(!show) }}>reface photo</button>
          </p>
          {/* {loading ? <p>gougou读取中</p> :
          <img src={dogResult && dogResult.message} />} */}
          {/* <img src='https://uploadbeta.com/api/pictures/random/' /> */}
          <Hello />
          {/* <p>X: {positions.x}, Y:{positions.y}</p> */}
          <LikeButton2 />
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
      </ThemesContext.Provider>
    </div>
  );
}

export default App;
