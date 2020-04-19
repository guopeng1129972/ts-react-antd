import React from "react";
import className from 'classnames';
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Defult = 'defult',
  Danger = 'denger',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  href?: string;
  // type不能，因为interface具有此属性
  btnType?: ButtonType;
  //children: React.ReactNode Button用了FC的类型已经包含children属性了
  //用了FC类型，props会获得children属性，
  children: React.ReactNode;
}

const Button: React.FC<BaseButtonProps> = (props) => {
  const {
    btnType,
    disabled,
    size,
    href,
    children
  } = props

  const classes = className('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  })
  //主体
  if (btnType === 'link' && href) {
    return (
      <a
        className={classes}
        href={href}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
      >{children}</button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Defult
}

export default Button