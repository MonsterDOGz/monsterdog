import { FC } from 'react'
import classNames from 'classnames'

type AlertType = 'primary' | 'danger' | 'warning' | 'default'

interface AlertProps {
  message?: string;
  title?: string;
  alertType?: AlertType;
  close? : boolean;
  className?: string
}

const Alert: FC<AlertProps> = (props) => {
  const {
    message,
    title,
    alertType,
    close,
    className
  } = props
  const classes = classNames('alert', className, {
    [`alert-${alertType}`]: alertType
  })
  return (
    <div
      className={classes}
    >
      { title && <p className={'alert-title'}>{title}</p> }
      <p>{message}</p>
      { close && <span className={'alert-close'}>关闭</span> }
    </div>
  )
}

Alert.defaultProps = {
  alertType: 'default',
  close: false,
}

export default Alert

