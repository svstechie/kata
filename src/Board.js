import React, { Component } from "react";
import Cell from "./Cell";
import "./tic_tac_toe.css";
import ReactDOM from "react-dom";

class Board extends React.Component {

    constructor(props) {
        super(props)      

        this.state = {
            player1: 'X',
            player2: 'O',
            xIsNext: 'O',
            currentPlayer: 'X',
        };
        this.handleChangeValue = this.handleChangeValue.bind(this);
    }

    handleChangeValue(childData) {
        if (childData == 'X') {
            this.setState({ currentPlayer: 'O' })
        }
        else {
            this.setState({ currentPlayer: 'X' })
        }        
    }

    render() {

        return <div >
            <div className="row" >
                <Cell index={1} value="" player={this.state.currentPlayer} parentCallback={this.handleChangeValue}></Cell>
                <Cell index={2} value="" player={this.state.currentPlayer} parentCallback={this.handleChangeValue}></Cell>
                <Cell index={3} value="" player={this.state.currentPlayer} parentCallback={this.handleChangeValue}></Cell>
            </div>
            <div className="row" >
                <Cell index={4} value="" player={this.state.currentPlayer} parentCallback={this.handleChangeValue}></Cell>
                <Cell index={5} value="" player={this.state.currentPlayer} parentCallback={this.handleChangeValue}></Cell>
                <Cell index={6} value="" player={this.state.currentPlayer} parentCallback={this.handleChangeValue}></Cell>
            </div>
            <div className="row" >
                <Cell index={7} value="" player={this.state.currentPlayer} parentCallback={this.handleChangeValue}></Cell>
                <Cell index={8} value="" player={this.state.currentPlayer} parentCallback={this.handleChangeValue}></Cell>
                <Cell index={9} value="" player={this.state.currentPlayer} parentCallback={this.handleChangeValue}></Cell>
            </div>
        </div>
    }
}

export default Board;