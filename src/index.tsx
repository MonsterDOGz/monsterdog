/*
 * @Author: MonsterDOG
 * @Date: 2021-01-18 15:00:55
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2021-02-02 16:56:37
 * @FilePath: /monsterdog/src/index.tsx
 * @Description: 【描述】
 */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Button from './components/Button/index'
import Alert from './components/Alert/index'
import './styles/index.scss';
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Tabs from './components/Tabs/tabs'
import TabsItem from './components/Tabs/tabsItem'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


const Demo: React.FC = () => {
  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e, 'I was closed.');
    // setAlertShow(!alertShow)
  };
  return (
    <>
      <Button>
        {/* <span onClick={() => { setAlertShow(!alertShow) }}>按钮</span> */}
      </Button>
      <Alert
        message='error'
        description='打开了 Alert !打开了 Alert !打开了 Alert !'
        type='warning'
        closable
        close={onClose}
      />
      <Menu mode='horizontal' defaultOpenSubMenus={['2']}>
        <MenuItem>菜单一</MenuItem>
        <MenuItem disabled>菜单二</MenuItem>
        <MenuItem>菜单三</MenuItem>
        <SubMenu title="菜单四">
          <MenuItem>油条</MenuItem>
          <MenuItem>豆浆</MenuItem>
        </SubMenu>
      </Menu>
      <Tabs>
        <TabsItem label='选项一' index='0'>111</TabsItem>
        <TabsItem label='选项二' index='1'>222</TabsItem>
        <TabsItem label='选项三' index='2' disabled>333</TabsItem>
      </Tabs>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
