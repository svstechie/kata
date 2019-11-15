import React, { Component} from "react";
import Cell from "./Cell";


const buildCellForRow = Array(3).fill().map((i) => { return <div className="cell"></div> } );

class Board extends React.Component {

    render(){
        return <div>
        {/* //            <Cell /> */}
                   <div className="row">
                        { buildCellForRow }
                   </div>
                </div>
    }
}

export default Board;