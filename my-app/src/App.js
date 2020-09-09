import React from 'react';
import Fruit from './Fruit';
import State_learn from './State_learn';
import ComponentLifrCycle from './ComponentLifeCycle';

function App() {
  return (
    <div>
       리액트 처음 배워보기<br/><br/>

       {/*
       <Lemon name = 'yellow' />
       <Lemon name = 'red' />
       <Lemon name = 'orange' />
       <Lemon name = 'green' /> <br/><br/>
       */}

       {/* <Fruit /> */}

       {/* <State_learn /> */}

       <ComponentLifrCycle />
    </div>
  );
}

/* props 사용 */
/**************************************/
/*
function Lemon(props) {
  console.log(props) // name : "yellow"
  console.log(props.name) // yellow
  return <div>I like Lemons</div>
} 
*/

function Lemon({name}) {
  return <div>I like {name}</div> // {props.name}으로 해도 결과 값은 동일
}

/**************************************/
/* 동적 컴포넌트 생성(map 함수) */
const temp = ['red', 'orange', 'yellow']
const temp2 = temp.map(element => {
  /* element를 출력 후 0을 리턴 */
  /* console.log(element) return 0 */
  
  /* element에 내용 추가된 array 생성 */
  return element + 'love';
})

console.log(temp2);

export default App;
