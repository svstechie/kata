import React, { Component} from "react";
import Cell from "./Cell";


const rowCount = 3;
const cellCount = 3;

// const buildCellForRow = Array(cellCount).fill().map((i) => { return <div className="cell"></div> } );
const buildCellForRow = Array(cellCount).fill().map((i) => { return <Cell/> } );
const buildRowWithCell = Array(rowCount).fill().map((i) => { return <div className="row">{ buildCellForRow }</div> } );

class Board extends React.Component {

    render(){
        return <div>
                {buildRowWithCell}
            </div>
    }
}

export default Board;