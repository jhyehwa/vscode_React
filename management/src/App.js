import React from 'react';
import Customer from './components/Customer';
import './App.css';
import './Customer.css';

const customers = [{
  'id' : 1,
  'image' : 'https://post-phinf.pstatic.net/MjAyMDAxMDJfMjE0/MDAxNTc3OTU1NDUwMTk2.CYPuT2TFBYa15mnZDOReu5YQErQHmO3juTjWXN1sg8Ag.3LRsWxTGKaYOzCFDHm6-stMK0BNTTSLlaKz2wQ1l5c4g.JPEG/62246832_425639158281486_1528361062506865852_n.jpg',
  'name' : '곰돌이',
  'birthday' : '930614',
  'gender' : '여자',
  'color' : '보라색'
},
{
  'id' : 2,
  'image' : 'https://img.theqoo.net/img/JHHFi.png',
  'name' : '피글렛',
  'birthday' : '930614',
  'gender' : '여자',
  'color' : '보라색'
}]

// 위의 정보를 Customer 컴포넌트에 전달해주어야 함
function App() {
  return (
    <div> {
      customers.map(c => {
        return (
          <Customer
            id = {c.id}
            image = {c.image}
            name = {c.name}
            birthday = {c.birthday}
            gender = {c.gender}
            color = {c.color}
          />
        )
      })
    }
    </div>
  );
}

export default App;
