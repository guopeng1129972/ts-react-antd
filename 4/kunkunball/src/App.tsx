import React from 'react';
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
const App: React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Button >Hello1</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary</Button>
        <Button btnType={ButtonType.Defult} size={ButtonSize.Large}>Large Defult</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>small danger</Button>
        <Button btnType={ButtonType.Link} href={'www.baidu.com'} disabled>disabled link</Button>
        <Button btnType={ButtonType.Link} href={'www.baidu.com'} >link</Button>

      </header>
    </div>
  );
}

export default App;
