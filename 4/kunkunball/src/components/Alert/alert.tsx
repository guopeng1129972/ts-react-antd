import React from 'react';
import classNames from 'classnames';

export enum alertType {
  Defult = 'defult',
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning'
}

interface baseAlertProps {
  className?: string;
  altType?: alertType;
  altState?: boolean;
  children?: React.ReactNode;
}

const Alert: React.FC<baseAlertProps> = (props) => {
  const {
    className,
    altType,
    // altState,
    children,
    // ...resProps
  } = props

  const classes = classNames('alt', className, {
    [`alt-${altType}`]: altType
    // altState: (altType !== alertType.Warning) && altState
  })


  return (
    <div
      className={classes}
    >  {children}
    </div>
  )

}

Alert.defaultProps = {
  altType: alertType.Defult
}

export default Alert;