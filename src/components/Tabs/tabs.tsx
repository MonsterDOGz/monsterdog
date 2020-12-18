import React, { CSSProperties, FC, createContext, useState } from 'react'
import classNames from 'classnames'

export interface TabsProps {
  defaultIndex?: string;
  style?: CSSProperties;
  className?: string;
  onSelect?: (selectIndex: string) => void;
}

interface ITabsContext {
  index: string;
  onSelect?: (selectIndex: string) => void
}

export const TabsContext = createContext<ITabsContext>({index: '0'})

export const Tabs: FC<TabsProps> = (props) => {
  const { defaultIndex, className, style, onSelect, children } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: ITabsContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick
  }
  const classes = classNames('tabs', className)
  return (
    <ul className={classes} style={style}>
      <TabsContext.Provider value={passedContext}>
        {children}
      </TabsContext.Provider>
    </ul>
  )
}

export default Tabs
