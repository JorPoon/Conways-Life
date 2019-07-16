import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid'

class Main extends Component {
    constructor(){
        super()
        this.speed = 100;
        this.rows = 30;
        this.cols = 50;

        this.state = {
            generation: 0,
            fullGrid: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
        }

    }

    
    render() {
        return (
            <div className= 'Main'>
            <h1>Conway's Way of Life By Jor</h1>
            <h2>Generations: {this.state.generation}</h2>
            <Grid 
            fullGrid={this.state.fullGrid}
            rows={this.rows}
            cols={this.cols}
            selectBox={this.selectBox}
            />
            </div>
        )
    }
}

export default Main