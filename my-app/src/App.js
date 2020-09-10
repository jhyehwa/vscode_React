import React from 'react';
import Fruit from './Fruit';
import State_learn from './State_learn';
import ComponentLifrCycle from './ComponentLifeCycle';

// Axios 사용
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

/* function App() {
  return (
    <div>
      리액트 처음 배워보기<br/><br/>

      <Lemon name = 'yellow' />
      <Lemon name = 'red' />
      <Lemon name = 'orange' />
      <Lemon name = 'green' /> <br/><br/>

      <Fruit />

      <State_learn />

      <ComponentLifrCycle />
    </div>
  );
} */


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

class App extends React.Component {
  state = {
    isLoading : true, // 마운트 되자마자 true
    movies : []
  };
  
  /* componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading : false});
    }, 6000);
  } */

  // async 함수는 비동기 → '이걸 기다려야 한다'라는 의미
  // await는 기다려야 할 대상이 axios임을 명시
  // 결과적으로 우리가 원하는 정보는 data > data > movies임
  // 파싱할 수 있도록 getMovies의 console.log부분을 수정
  getMovies = async() => {
    const {
      data : {
        data : {movies}
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    // console.log(movies);
    this.setState({movies, isLoading : false})
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state;
    return(
      <section className="container">
        {isLoading ? (
          <div className="Loader">
            <span className="Loader_text">Loading....</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(element => (
              <Movie 
              key = {element.id}
              id = {element.id}
              year = {element.year}
              title = {element.title}
              summary = {element.summary}
              poster = {element.medium_cover_image}
              genres = {element.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

/*
setTimeout(function(){
  console.log('Works!!');
}, 3000);
*/

export default App;
