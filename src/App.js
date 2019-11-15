import React, { Component} from "react";
import {hot} from "react-hot-loader";

class App extends Component{
    componentDidMount(){

    }
    render(){
        return(
        <div className="App">
            <h1> Hello, World! </h1>
            
        </div>
        );
    }
}

export default hot(module)(App);