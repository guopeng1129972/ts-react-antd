import React, { useRef } from 'react';
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
type NativeAlertProps = baseAlertProps & React.AreaHTMLAttributes<HTMLElement>;
type AnchorAlertProps = baseAlertProps & React.AnchorHTMLAttributes<HTMLElement>;
export type AlertProps = Partial<NativeAlertProps & AnchorAlertProps>;
const Alert: React.FC<AlertProps> = (props) => {
  const {
    className,
    altType,
    altStyle,
    children,
    title,
  } = props
  const domRef = useRef<HTMLDocument>(null)

  const classes = classNames('alt', className, {
    [`alt-${altType}`]: altType,
    [`alt-${altStyle}`]: altStyle,

    // altState: (altType !== alertType.Warning) && altState
  })
  const onClose = () => {
    alert(1)
  }

  if (altStyle === 'spe') {
    return (
      <div
        className={classes}
      >
        <span>
          {title}
        </span>
        <p
          className={'alt-spe-span'}
        >{children}</p>
        <span
          className={'alt-no-clase-span'}
          onClick={onClose}>

          X
        </span>
      </div>
    )
  } else {
    return (
      <div
        className={classes}
      >
        <span
          className={'alt-no-span'}
        >{children}
        </span>
        <span
          onClick={onClose}
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



