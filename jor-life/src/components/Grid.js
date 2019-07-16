import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Grid extends Component {

    render() {
        const width = this.props.cols * 14;
        let rowsArr = []
        let boxClass = "";
        //create box id for box element
        for(var i = 0; i < this.props.rows; i++) {
            for (var j = 0; j < this.props.cols; j++){
                let boxID = i + "_" + j

                boxClass = this.props.fullGrid[i][j] ? "alive" : "dead"
            }
        }
        return(
            <div className='grid' style={{width: width}}>
                {{rowsArr}}
            </div>
        )
    }
}

export default Grid