import React from 'react';
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Alert, { alertType, altSty } from './components/Alert/alert';
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu';
const App: React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0} onSelect={index => console.log(index)} mode={"horizontal"}>
          <MenuItem >
            cool link
          </MenuItem >
          <MenuItem disabled>
            cool link1
          </MenuItem >
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown1
            </MenuItem>
            <MenuItem>
              dropdown2
            </MenuItem>
          </SubMenu>
          <MenuItem >
            cool link3
          </MenuItem>
        </Menu>

        {/* <Button autoFocus>Hello1</Button>
        <Button className='custom' disabled>disable Hello1</Button>
        <Button onClick={(e) => { e.preventDefault(); alert(123) }}>Hello1</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary</Button>
        <Button btnType={ButtonType.Defult} size={ButtonSize.Large}>Large Defult</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>small danger</Button>
        <Button btnType={ButtonType.Link} href={'http://www.baidu.com'} disabled>disabled link</Button>
        <Button btnType={ButtonType.Link} href={'http://www.baidu.com'} target='_blank' >link</Button> */}
      </header>
      <p>BUTTON END</p>
      <p>ALER START</p>
      <header className='App-header'>

        <Alert altType={alertType.Danger} title={'this is title'}>danger</Alert>
        <Alert altType={alertType.Success} altStyle={altSty.spe} title={"this is title"}>alert danger spe</Alert>
        <Alert altType={alertType.Success}>alert success</Alert>
        <Alert altType={alertType.Warning}>alert warn</Alert>
      </header>
    </div>
  );
}

export default App;
