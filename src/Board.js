import React, { Component } from "react";
import Cell from "./Cell";
import "./tic_tac_toe.css";

class Board extends React.Component {

    constructor(props) {
        super(props)       
        this.state = {
            currentplayer: 'X',
            result: false,
            nextPlayer: 'X',
            squares: Array(9).fill(null),
            erroMsg: false
        };
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.checkResult = this.checkResult.bind(this);
    }

    handleChangeValue(childData, rowIndex) {
        if(this.state.result==true || this.state.erroMsg==true) {
            this.setState({
                erroMsg : true,                
            })
            return
        }

        const squares1 = this.state.squares.slice();
        squares1[rowIndex] = childData;
        this.setState({
            squares: squares1,            
        }, () => {
            this.checkResult(childData)})
    }
    checkResult(childData) {
        this.setState({
            currentplayer : childData
        })
        if (childData == 'X') {            
            this.setState({ nextPlayer: 'O'})        
        }
        else {
            this.setState({ nextPlayer: 'X'})
        }        
       
       let winningScenarios = [[0, 1, 2],
       [3, 4, 5],
       [6, 7, 8],
       [0, 3, 6],
       [1, 4, 7],
       [2, 5, 8],
       [0, 4, 8],
       [2, 4, 6],];
       for(let i=0;i<winningScenarios.length;i++) {          
           const a = this.state.squares[winningScenarios[i][0]];
           const b = this.state.squares[winningScenarios[i][1]];
           const c = this.state.squares[winningScenarios[i][2]];

           if((a!=null)&&(b!=null)&&(c!=null)&&(a==b)&&(b==c)) {
            this.setState({
                result :true
            })
           }           
       }
    }
    render() {      
        return <div >
           <div>{ this.state.result ? "Congratulation Player "+this.state.currentplayer+" win!" : null }</div>
            <div>{ this.state.erroMsg ? "Sorry Game Over. Pls Reload the page to play!" : null }</div>
            <div className="row" >
                <Cell value={0} player={this.state.nextPlayer} parentCallback={this.handleChangeValue}></Cell>
                <Cell value={1} player={this.state.nextPlayer} parentCallback={this.handleChangeValue}></Cell>
                <Cell value={2} player={this.state.nextPlayer} parentCallback={this.handleChangeValue}></Cell>
            </div>
            <div className="row" >
                <Cell value={3} player={this.state.nextPlayer} parentCallback={this.handleChangeValue}></Cell>
                <Cell value={4} player={this.state.nextPlayer} parentCallback={this.handleChangeValue}></Cell>
                <Cell value={5} player={this.state.nextPlayer} parentCallback={this.handleChangeValue}></Cell>
            </div>
            <div className="row" >
                <Cell value={6} player={this.state.nextPlayer} parentCallback={this.handleChangeValue}></Cell>
                <Cell value={7} player={this.state.nextPlayer} parentCallback={this.handleChangeValue}></Cell>
                <Cell value={8} player={this.state.nextPlayer} parentCallback={this.handleChangeValue}></Cell>
            </div>
        </div>
    }
}

export default Board;