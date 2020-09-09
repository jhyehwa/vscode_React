import React from 'react';

// 클래스형 컴포넌트
// class App extends React.Componemt
// → App 클래스는 React.Component임을 의미
// = React.Component를 상속받은 App 클래스
// ★★★ 이 형식은 클래스형 컴포넌트를 사용하는 것에 필수적
class App extends React.Component {
    state = {
        count : 0
    };

    add = () => {
        // console.log('증가')
        this.setState(current => ({count : current.count + 1}))
    };

    minus = () => {
        // console.log('감소')
        this.setState(current => ({count : current.count - 1}))
    };
    
    render() {
        return (
            <div>
                <h1>리액트 배우기 {this.state.count}일차</h1>
                <button onClick = {this.add}>증가</button>
                <button onClick = {this.minus}>감소</button>
            </div>
        );
    }
}

export default App;