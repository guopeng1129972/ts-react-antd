import React, { useState, createContext } from 'react';
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'
// 1.使用字符串自变量代替枚举(enum)
type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectIndex: number) => void
/* 
定义MenuProps接口
定义defaultIndex,classname,mode,style,onSelect
*/
export interface MenuProps {
  defaultIndex?: number;
  classname?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
}
interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
  mode?: MenuMode;
}
//创建MenuContext 泛型为IMenuContext
export const MenuContext = createContext<IMenuContext>({ index: 0 })
/* 
创建menu组件，返回ul
 */
const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, classname, mode, style, children, onSelect } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classNames('menu', classname, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  })
  const handleClick = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContent: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
    mode: mode,
  }
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, { index })
      } else {
        console.error("Warning:Menu has a child which is not a MenuItem components")
      }
    })
  }
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContent}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}
//设置默认属性
Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horizontal"
}

//导出
export default Menu