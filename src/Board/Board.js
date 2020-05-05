import React, { Component } from 'react';
import Cell from '../Cell/Cell';
import './Board.css';

class Board extends Component {
    static defaultProps = {
        nCols: 5,
        nRows: 5
    }

    constructor(props) {
        super(props);

        this.state = {
            board: []
        }

        this.newGame = this.newGame.bind(this);
        this.flipNeighbors = this.flipNeighbors.bind(this);
    }

    componentDidMount() {
        this.setState({
            board: this.generateBoard()
        });
    }

    generateBoard() {
        let board = new Array(this.props.nRows);
        let counter = 0;
        for (let i = 0; i < this.props.nRows; i++) {
            board[i] = new Array(this.props.nCols);
            for (let j = 0; j < this.props.nCols; j++) {
                counter++;
                if (Math.floor(Math.random() * 4))
                    board[i][j] = <Cell key={counter} id={counter} isLit={false} flip={this.flipNeighbors}/>;
                else 
                    board[i][j] = <Cell key={counter} id={counter} isLit={true} flip={this.flipNeighbors}/>;
            }
        }
        return board;
    }

    newGame() {
        let board = this.generateBoard();
        this.setState ({
            board:board
        });
    }

    flipNeighbors(cell, isLit) {
        let board = this.state.board.map(row => row.slice());
        let counter = 0;
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                counter++;
                if (cell === counter) {
                    board[i][j] = <Cell key={counter} id={counter} isLit={!isLit} flip={this.flipNeighbors}/>;
                }
            }
        }
        
        this.setState({
            board: board
        })
    }

    render() {
        return(
            <div className="board">
                <div className="glow-border">
                    <h1 className="glow">LI<span id="offset">GHTSO</span>UT</h1>
                </div>
                <table>
                    <tbody>
                        <tr>{this.state.board.map((row, i) => <td key={i}>{row}</td>)}</tr>
                    </tbody>
                </table>
                <button className="new-game-button" onClick={this.newGame}>New Game</button>
            </div>
        );
    }
}

export default Board;