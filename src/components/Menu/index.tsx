import { FC } from 'react'
import Menu, { MenuProps } from './menu'
import SubMenu, { SubMenuProps } from './subMenu'
import MenuItem, { MenuItemProps } from './menuItem'

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>,
  SubMenu: FC<SubMenuProps>
}
const ObjMenu = Menu as IMenuComponent

ObjMenu.Item = MenuItem
ObjMenu.SubMenu = SubMenu

export default ObjMenu