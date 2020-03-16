import React, { Component} from "react";


import Board from './Board';
// import './styles/board.css';

class App extends Component{
    componentDidMount(){

    }
    render(){
        return(
        <div className="app">
            <h1> Hello, World! </h1>
            <Board/>
        </div>
        );
    }
}

export default App;