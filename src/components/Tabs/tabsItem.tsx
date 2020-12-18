import React, { CSSProperties, FC, useContext } from 'react'
import { TabsContext } from './tabs'
import classNames from 'classnames'

export interface TabsItemProps {
  index: string;
  label?: string;
  disabled?: boolean;
  style?: CSSProperties;
  className?: string;
}

const TabsItem: FC<TabsItemProps> = (props) => {
  const { index, label, disabled, style, className, children } = props
  const context = useContext(TabsContext)
  const classes = classNames('tabs-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })
  const handleClick = () => {
    if (context.onSelect && !disabled && (typeof index === 'string')) {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} style={style}>
      <div className='tabsItem-title' onClick={handleClick}>
        {label}
      </div>
      <div className='tabsItem-body'>
        {children}
      </div>
    </li>
  )
}

TabsItem.displayName = 'tabsItem'

export default TabsItem
