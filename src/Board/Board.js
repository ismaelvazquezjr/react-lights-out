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
            title: <h1 className="glow">LI<span id="offset">GHTSO</span>UT</h1>,
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
                let isLit = Math.floor(Math.random() * 4) === 0;
                board[i][j] = {
                    key: counter,
                    id: counter,
                    isLit: isLit,
                    flip: this.flipNeighbors,
                    disabled: false
                }
            }
        }
        return board;
    }

    newGame() {
        let board = this.generateBoard();
        this.setState ({
            title: <h1 className="glow">LI<span id="offset">GHTSO</span>UT</h1>,
            board:board,
            isWon: false
        });
    }

    flipNeighbors(cell) {
        let board = this.state.board.map(row => row.slice());
        let counter = 0;
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                counter++;
                if (cell === counter) {
                    board[i][j].isLit = !board[i][j].isLit;
                    
                    if(i !== 0) board[i - 1][j].isLit = !board[i - 1][j].isLit;
                    if(i !== this.props.nRows - 1) board[i + 1][j].isLit = !board[i + 1][j].isLit;
                    if(j !== 0) board[i][j - 1].isLit = !board[i][j - 1].isLit;
                    if(j !== this.props.nCols - 1) board[i][j + 1].isLit = !board[i][j + 1].isLit;
                }
            }
        }
        
        this.setState({
            board: board
        });

        if (this.isWinner()) {
            let board = this.state.board.map(r => r.slice());

            for (let i = 0; i < board.length; i++) {
                for (let j = 0; j < board[i].length; j++) {
                    board[i][j].disabled = true;
                }
            }

            this.setState({
                title: <h1 className="glow">WI<span id="offset">NNE</span>R!!!</h1>,
                board: board,
                isWon: true
            });
        }
    }

    isWinner() {
        for (let i = 0; i < this.state.board.length; i++) {
            for (let j = 0; j < this.state.board[i].length; j++) {
                if (this.state.board[i][j].isLit !== false) {
                    return false;
                }
            }
        }

        return true;
    }

    render() {
        return(
            <div className="board">
                <div className="glow-border">
                    {this.state.title}
                </div>
                <table>
                    <tbody>
                        {this.state.board.map(row => {
                            let r = row.map(cellProp => {
                                return <td><Cell key={cellProp.key} id={cellProp.id} isLit={cellProp.isLit} flip={cellProp.flip} disabled={cellProp.disabled}/></td>
                            });
                            return <tr>{r}</tr>
                        })}
                    </tbody>
                </table>
                <button className={`new-game-button ${this.state.isWon && 'won-state'}`} onClick={this.newGame}>New Game</button>
            </div>
        );
    }
}

export default Board;