import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// render: html로 입력받아 해석해서 표준 출력 장치(모니터)로 출력 해줌
// 위 작업을 Rendering이라 함

ReactDOM.render(
  <App />,
  document.getElementById('root')
);