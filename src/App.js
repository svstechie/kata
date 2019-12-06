import React, { Component} from "react";
import Board from "./Board";

class App extends Component{
    componentDidMount(){
        
    }
    render(){
        return(
        <div className="app">
            <h1>Lets Play!</h1>
            <Board></Board>
        </div>
        );
    }
}

export default App;