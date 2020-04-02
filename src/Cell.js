import React, { Component} from "react";

class Cell extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showMarker : false,
            clickCount : 0
        }
    }
    handleClick(){
        this.setState({
            showMarker : true,
            clickCount : this.state.clickCount +1
        });
    }
    render(){
        return <div className="cell" onClick={()=> this.handleClick()}>
            {this.state.showMarker ? 
                this.state.clickCount % 2 == 0 ? "O": "X" 
            :""}
        </div>
    }
}

export default Cell;