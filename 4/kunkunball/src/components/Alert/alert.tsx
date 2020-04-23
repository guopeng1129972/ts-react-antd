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
        className={classes}
      >
        <span
          className={'alt-spe-span'}
        >{children}</span>
      </div>
    )
  } else {
    return (
      <div
        className={classes}
      >
        <span
          className={'alt-no-span'}
        >{children}</span>
        <span
        className={'alt-no-clase-span'}>
          X
        </span>
      </div>
    )
  }




}

Alert.defaultProps = {
  altType: alertType.Success
}

export default Alert;



