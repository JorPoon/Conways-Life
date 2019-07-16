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
                if(Math.floor(Math.random() * 5) === 2) {
                    copyGrid[i][j] = true;
                }
            }
        }
        this.setState({
            fullGrid: copyGrid
        })
    }

    componentDidMount() {
        this.random()
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