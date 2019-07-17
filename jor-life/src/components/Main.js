import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid'
import {Button, ButtonGroup} from '@material-ui/core';

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
        // this.random()
        // this.play()
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
        this.random()
		clearInterval(this.intervalId);
		this.intervalId = setInterval(this.lifegen, this.speed);
    }

    pause = () => {
        clearInterval(this.intervalId);
        this.setState({
            generation: this.state.generation
        })
    }

    clear = () => {
        clearInterval(this.intervalId);
        let new_grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false))
        this.setState({
            fullGrid: new_grid,
            generation: 0
        })
    }

    slow = () => {
        this.speed = 2000
        this.play()
    }

    normal = () => {
        this.speed = 1000
        this.play()
    }

    fast = () => {
        this.speed = 100
        this.play()
    }

    gridSize = (size) => {
        if (size === "small") {
            this.cols = 20
            this.rows = 20
        } else if (size === "medium") {
            this.cols = 50
            this.rows = 30
        } else if (size === "large") {
            this.cols = 75
            this.rows = 30
        } else {
            alert("Not Available")
        }
        let box = Array(this.rows).fill().map(() => Array(this.cols).fill(false))
        this.setState({
            fullGrid: box
        })
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
            generation: this.state.generation + 1
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
            <Button onClick={this.play}>Play</Button>
            <Button onClick={this.pause}>Pause</Button>
            <Button onClick={this.clear}>Clear Grid</Button>
            <Button onClick={this.slow}>Slow</Button>
            <Button onClick={this.normal}>Normal</Button>
            <Button onClick={this.fast}>Fast</Button>
            <Button onClick={() => {this.gridSize("small")}}>Small</Button>
            <Button onClick={() => {this.gridSize("medium")}}>Medium</Button>
            <Button onClick={() => {this.gridSize("large")}}>large</Button>

            </div>
        )
    }
}

//copies nested arrays
function cloneArray(arr) {
    return JSON.parse(JSON.stringify(arr))
}

export default Main