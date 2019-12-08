import React, { Component} from "react";

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            clickedPlayer : "",
        }
    }

    handleClick(player,rowIndex) {
       if(this.state.clickedPlayer.length == 0) {
            this.setState({clickedPlayer : player});
            this.props.parentCallback(player,rowIndex);
       }  
    }


    render(props){
        return <div className="cell" onClick={() => this.handleClick(this.props.player, this.props.value)}>
                {this.state.clickedPlayer}
                </div>
    }
}

export default Cell;