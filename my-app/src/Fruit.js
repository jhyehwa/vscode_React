import React from 'react';
import PropTypes from 'prop-types';

// 함수형 컴포넌트
function App() {
  return (
    <div>
      {/* 이름만 출력 */}
      {/* {fruitList.map(element => <Fruit name = {element.name}/>)} */}

      {/* 이름 + 사진 출력 */}
      {/* {fruitList.map(element => <Fruit name = {element.name} picture = {element.image}/>)} */}
      {/* {fruitList.map(renderFunction)} */}

      {/* key + 이름 + 사진 */}
      {/* {fruitList.map(element => <Fruit key = {element.id} name = {element.name} picture = {element.image} />)} */}

      {fruitList.map(element => <Fruit key = {element.id} name = {element.name} picture = {element.image} rating = {element.rating} />)}
    </div>
  );
}

/**************************************/
/* 동적 컴포넌트 생성 */
function Fruit({name, picture, rating}) {
  return <div>
    I like {name} <br/>
    <img src = {picture} alt = ""/> <br />
    {rating}/5.0
  </div>
}

Fruit.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number
}

const fruitList = [
  {
    // 유니크한 key 가지기
    id : 1,
    name : 'apple',
    image : 'https://image.shutterstock.com/image-photo/fresh-red-apple-isolated-on-260nw-254938384.jpg',
    rating : 5
  },
  {
    // 유니크한 key 가지기
    id : 2,
    name : 'orange',
    image : 'https://image.shutterstock.com/image-vector/abstract-orange-icon-vector-flat-260nw-1104205634.jpg',
    rating : 4.5
  },
  {
    // 유니크한 key 가지기
    id : 3,
    name : 'blueberry',
    image : 'https://image.shutterstock.com/image-photo/blueberries-isolated-260nw-722035450.jpg',
    rating : 4.2
  },
  {
    // 유니크한 key 가지기
    id : 4,
    name : 'watermelon',
    image : 'https://en.pimg.jp/050/595/319/1/50595319.jpg',
    rating : 5
  }
];

/* map 함수가 element 마다 사용 할 함수를 외부에 별도로 선언 할 경우 풀어쓰는 코드 */
/*
function renderFunction(element) {
  return <Fruit name = {element.name} picture = {element.image} />
}
*/

export default App;
