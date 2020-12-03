import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Button from './components/Button/index'
import Alert from './components/Alert/index'
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Button>按钮</Button>
    <Alert message={'打开了 Alert !'} alertType='primary' close={true}></Alert>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
