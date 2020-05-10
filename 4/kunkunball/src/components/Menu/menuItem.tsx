import React, { useContext } from "react";
import classNames from 'classnames'
import { MenuContext } from './menu'
/* 
创建MenuItemProps index,disabled,className,style
 */
export interface MenuItemProps {
  index: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, className, disabled, children, style } = props;
  const context = useContext(MenuContext);
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })
  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index)
    }
  }

  return (
    <li
      className={classes} style={style} onClick={handleClick}
    >{children}</li>
  )
}

MenuItem.defaultProps = {

}

export default MenuItem