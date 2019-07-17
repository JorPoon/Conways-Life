import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid'
import Button from '@material-ui/core';

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

    componentDidMount() {
        this.random()
        this.play()
    }

    //toggles box's alive or dead state
    selectBox = (row, col) => {
        let copyGrid = cloneArray(this.state.fullGrid)
        copyGrid[row][col] = !copyGrid[row][col]
        this.setState({
            fullGrid: copyGrid
        })
    }

    //random seeding of boxes to change alive or dead state
    random = () => {
        let copyGrid = cloneArray(this.state.fullGrid)
        for(var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.cols; j++){
                if(Math.floor(Math.random() * 3) === 1) {
                    copyGrid[i][j] = true;
                }
            }
        }
        this.setState({
            fullGrid: copyGrid
        })
    }

    


    play = () => {
		clearInterval(this.intervalId);
		this.intervalId = setInterval(this.lifegen, this.speed);
    }

    pause = () => {
		clearInterval(this.intervalId);
    }
    
    //game of life rules being applied to boxes thorugh random
    lifegen = () => {
        let g = this.state.fullGrid;
        let g2 = cloneArray(this.state.fullGrid);

        for(var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.cols; j++){
                let count = 0;
                if (i > 0) if (g[i - 1][j]) count++;
                if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
                if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
                if (j < this.cols - 1) if (g[i][j + 1]) count++;
                if (j > 0) if (g[i][j - 1]) count++;
                if (i < this.rows - 1) if (g[i + 1][j]) count++;
                if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
                if (i < this.rows - 1 && j < this.cols - 1) if (g[i + 1][j + 1]) count++;
                if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
                if (!g[i][j] && count === 3) g2[i][j] = true;
            }
        }
        
        this.setState({
            fullGrid: g2,
            // generation: this.state.generation + 1
        })

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

//copies nested arrays
function cloneArray(arr) {
    return JSON.parse(JSON.stringify(arr))
}

export default Main