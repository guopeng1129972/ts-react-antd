import React from 'react';
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Alert, { alertType, altSty } from './components/Alert/alert'
const App: React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Button autoFocus>Hello1</Button>
        <Button className='custom' disabled>disable Hello1</Button>
        <Button onClick={(e) => { e.preventDefault(); alert(123) }}>Hello1</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary</Button>
        <Button btnType={ButtonType.Defult} size={ButtonSize.Large}>Large Defult</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>small danger</Button>
        <Button btnType={ButtonType.Link} href={'http://www.baidu.com'} disabled>disabled link</Button>
        <Button btnType={ButtonType.Link} href={'http://www.baidu.com'} target='_blank' >link</Button>
      </header>
      <p>BUTTON END</p>
      <p>ALER START</p>
      <header className='App-header'>

        <Alert altType={alertType.Danger} altStyle={altSty.no} title={'this is title'}>danger</Alert>
        <Alert altType={alertType.Danger}>alert danger</Alert>
        <Alert altType={alertType.Success}>alert success</Alert>
        <Alert altType={alertType.Warning}>alert warn</Alert>
      </header>
    </div>
  );
}

export default App;
