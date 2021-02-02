/*
 * @Author: MonsterDOG
 * @Date: 2021-01-18 15:00:55
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2021-02-02 16:56:15
 * @FilePath: /monsterdog/src/components/Alert/alert.tsx
 * @Description: 【描述】
 */
import { FC, useState } from 'react'
import classNames from 'classnames'
import Icon from '../Icon/icon'
import Transition from '../Transition/transition'

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
  const [ alertShow, setAlertShow ] = useState(false)
  const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e, 'I was closed.');
    setAlertShow(!alertShow)
  };
  return (
    <Transition
      in={alertShow}
      timeout={300}
      animation="zoom-in-top"
      wrapper
    >
      <div
        className={classes}
        { ...restProps }
      >
        <div className='alert-content'>
          <p className='alert-message'>{message}</p>
          { description && <p className={'alert-description'}>{description}</p> }
        </div>
        {/* { (closable && close) && <span className={'alert-close'} onClick={close.bind(this)}>关</span> } */}
        { (closable && close) && <Icon icon="times" className="alert-close"/> }
      </div>
    </Transition>
  )
}

Alert.defaultProps = {
  type: 'primary',
  closable: false,
  message: '提示消息',
  description: ''
}

export default Alert

