import React from 'react';
import classNames from 'classnames';

export enum altSty {
  spe = 'spe',
  no = 'no'
}

export enum alertType {
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning'
}

interface baseAlertProps {
  className?: string;
  altType?: alertType;
  altState?: boolean;
  altStyle?: altSty;
  title?: string;

  children?: React.ReactNode;
}

const Alert: React.FC<baseAlertProps> = (props) => {
  const {
    className,
    altType,
    // altState,
    altStyle,
    children,
    title,
    ...resProps
  } = props

  const classes = classNames('alt', className, {
    [`alt-${altType}`]: altType,
    [`alt-${altStyle}`]: altStyle,

    // altState: (altType !== alertType.Warning) && altState
  })
  if (altStyle === 'spe') {
    return (
      <div
        title={title}
        className={classes}
      >  {children}
      </div>
    )
  } else {
    return (
      <div
        title={title}
        className={classes}
      >  {children}
      </div>
    )
  }




}

Alert.defaultProps = {
  altType: alertType.Success
}

export default Alert;