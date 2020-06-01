import React, { useContext, FunctionComponentElement } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'

export interface SubMenuProps {
  index?: number,
  title?: string,
  className?: string
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, className, children }) => {
  const context = useContext(MenuContext)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index
  })
  const renderChildren = () => {
    const childComponent = React.Children.map(children, (child, i) => {
      const childrenElement = child as FunctionComponentElement<MenuItemProps>
      if (childrenElement.type.displayName === 'MenuItem') {
        return childrenElement
      } else {
        console.log('Warning:SubMenu has a child which is not a MenuItem')
      }
    })
    return (
      <ul className='kunkun-submenu'>{childComponent}</ul>
    )
  }
  return (
    <li key={index} className={classes}>
      <div className="submenu-title">
        {title}
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu';
export default SubMenu