import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Box from './Box';
import "./Box.css"

class Grid extends Component {

    render() {
        const width = this.props.cols * 16;
        let rowsArr = []
        let boxClass = "";
        //create boxes with id and class (starts out as box dead)
        for(var i = 0; i < this.props.rows; i++) {
            for (var j = 0; j < this.props.cols; j++){
                let boxID = i + "_" + j

                boxClass = this.props.fullGrid[i][j] ? "box alive" : " box dead"
                rowsArr.push(
                    <Box
                        boxClass={boxClass}
                        key={boxID}
                        boxID={boxID}
                        row={i}
                        col={j}
                        selectBox={this.props.selectBox}
                    />
                )
            }
        }
        return(
            <div className='grid' style={{width: width}}>
                {rowsArr}
            </div>
        )
    }
}

export default Grid