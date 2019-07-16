import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Box.css'

class Box extends Component{
    selectBox = () => {
        this.props.selectBox(this.props.row, this.props.col)
    }
    render() {
        return (
            <div
                className={this.props.boxClass}
                id={this.props.boxID}
                onClick={this.selectBox}
            />
        )
    }
}

export default Box;