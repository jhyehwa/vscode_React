import React from 'react';

// 생성자
class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("React")
    }

    state = {
        count : 0
    };

    add = () => {
        this.setState(current => ({count : current.count + 1}))
    };

    minus = () => {
        this.setState(current => ({count : current.count - 1}))
    };

    componentDidMount() {
        console.log("component rendered")
    }

    componentDidUpdate() {
        console.log("component update")
    }
    
    render() {
        console.log('render');
        // 컴포넌트가 마운트될 때, 컴포넌트가 스크린에 표시될 때 생성자를 호출
        // 그 후에 render가 호출

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