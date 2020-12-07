import React from 'react'
import Alert, { AlertProps } from './alert'
import { render, fireEvent } from '@testing-library/react'

const testProps: AlertProps = {
  message: '错误',
  description: '这是一个显示错误的描述',
  type: 'success',
  closable: true,
  close: jest.fn()
}

describe('测试消息框组件', () => {
  it('应该呈现正常的默认框', () => {
    const wrapper = render(<Alert data-testid='Alert' />)
    const element = wrapper.getByTestId('Alert')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('alert alert-primary')
    expect(element['closable']).toBeFalsy()
  })
  it('应该根据不同的 props 传值呈现正常的组件', () => {
    const wrapper = render(<Alert data-testid='Alert' { ...testProps }/>)
    const element = wrapper.getByTestId('Alert')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('alert alert-success')
    const elementMessage = wrapper.getByText(testProps.message)
    expect(elementMessage).toBeInTheDocument()
    const elementDescription = wrapper.getByText(testProps.description)
    expect(elementDescription).toBeInTheDocument()
    const elementClose = wrapper.getByText('关')
    fireEvent.click(elementClose)
    expect(testProps.close).toHaveBeenCalled()
  })
})






