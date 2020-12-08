import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Button from './components/Button/index'
import Alert from './components/Alert/index'
import './styles/index.scss';
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'


const Demo: React.FC = () => {
  const [ alertShow, setAlertShow ] = useState(false)
  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e, 'I was closed.');
    setAlertShow(!alertShow)
  };
  return (
    <>
      <Button>
        <span onClick={() => { setAlertShow(!alertShow) }}>按钮</span>
      </Button>
      {alertShow &&
        <Alert
          message='error'
          description='打开了 Alert !打开了 Alert !打开了 Alert !'
          type='warning'
          closable
          close={onClose}
        />
      }
      <Menu>
        <MenuItem index='0'>菜单一</MenuItem>
        <MenuItem index='1'>菜单二</MenuItem>
        <MenuItem index='2'>菜单三</MenuItem>
      </Menu>
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
