import React from "react";
import classNames from 'classnames'

/* 
创建MenuItemProps index,disabled,className,style
 */
export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, className, disabled, children, style } = props;
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled
  })
  return (
    <li
      className={classes} style={style}
    >{children}</li>
  )
}

MenuItem.defaultProps = {

}

export default MenuItem