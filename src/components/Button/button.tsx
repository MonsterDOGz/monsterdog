import { FC, ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import classNames from 'classnames'

type ButtonType = 'primary' | 'danger' | 'default' | 'link'
type ButtonSize = 'lg' | 'sm'

interface BaseButtonProps{
  btnType?: ButtonType;
  size?: ButtonSize;
  className? : string;
  children?: ReactNode;
  disabled?: boolean;
  href?: string
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: FC<ButtonProps> = (props) => {
  const {
    btnType,
    size,
    className,
    children,
    disabled,
    href,
    ...restProps
  } = props
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  })
  if (btnType === 'link' && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  btnType: 'default',
  disabled: false
}

export default Button
