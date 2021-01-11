import { FC } from 'react'
import classNames from 'classnames'
import Icon from '../Icon/icon'

export type AlertType = 'success' | 'primary' | 'warning' | 'danger'

export interface AlertProps {
  message?: string;
  description?: string;
  type?: AlertType;
  closable? : boolean;
  className?: string,
  close? : Function
}

const Alert: FC<AlertProps> = (props) => {
  const {
    message,
    description,
    type,
    closable,
    className,
    close,
    ...restProps
  } = props
  const classes = classNames('alert', className, {
    [`alert-${type}`]: type
  })
  return (
    <div
      className={classes}
      { ...restProps }
    >
      <div className='alert-content'>
        <p className='alert-message'>{message}</p>
        { description && <p className={'alert-description'}>{description}</p> }
      </div>
      {/* { (closable && close) && <span className={'alert-close'} onClick={close.bind(this)}>关</span> } */}
      { (closable && close) && <Icon icon="times" className="alert-close" onClick={close.bind(this)}/> }
    </div>
  )
}

Alert.defaultProps = {
  type: 'primary',
  closable: false,
  message: '提示消息',
  description: ''
}

export default Alert

