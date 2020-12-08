import React from 'react'
import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'
import { fireEvent, render, RenderResult } from '@testing-library/react'

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test'
}
const generateMen = (props: MenuProps) => {
  return (
    <Menu { ...props }>
      <MenuItem index='0'>
        active
      </MenuItem>
      <MenuItem index='1' disabled>
        disabled
      </MenuItem>
      <MenuItem index='2'>
        asd
      </MenuItem>
    </Menu>
  )
}
let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement
describe('在默认水平时测试 Menu、MenuItem 组件', () => {
  beforeEach(() => {
    wrapper = render(generateMen(testProps))
    menuElement = wrapper.getByTestId('test-menu')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
  })
  it('在默认传参的情况下显示正确的菜单和子组件', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('viking-menu test')
    expect(menuElement.querySelectorAll(':scope > li').length).toBe(3)
    expect(activeElement).toHaveClass('menu-item is-active')
    expect(disabledElement).toHaveClass('menu-item is-disabled')
  })
  it('单击 MenuItem 时应该改变选中项，并调用正确的回调', () => {
    const thirdItem = wrapper.getByText('asd')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
  })
  it('正确显示垂直的菜单', () => {
  })
})


