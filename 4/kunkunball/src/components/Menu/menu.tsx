import React from 'react';
import classNames from 'classnames'

// 1.使用字符串自变量代替枚举(enum)
type MenuMode = 'horizontal' | 'vertical';

/* 
定义MenuProps接口
定义defaultIndex,classname,mode,style,onSelect
*/
export interface MenuProps {
  defaultIndex?: number;
  classname?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: (selectIndex: number) => void
}
/* 
创建menu组件，返回ul
 */
const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, classname, mode, style, children } = props
  const classes = classNames('munu', classname, {
    'menu-vertical': mode === 'vertical'
  })
  return (
    <ul
      className={classes}
      style={style}
    >{children}</ul>
  )
}
//设置默认属性
Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horizontal"
}

//导出
export default Menu