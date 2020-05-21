import React, { useState, createContext } from 'react';
import classNames from 'classnames'

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
    'menu-vertical': mode === 'vertical'
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
  }
  return (
    <ul
      className={classes}
      style={style}
      data-testid="test-menu"
    >
      <MenuContext.Provider value={passedContent}>
        {children}
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