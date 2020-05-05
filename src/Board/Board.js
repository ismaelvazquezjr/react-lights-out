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
    }

    render() {
        return(
            <div className="board">
                <div className="glow-border">
                    <h1 className="glow">LI<span id="offset">GHTSO</span>UT</h1>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td><Cell status="on"/></td>
                            <td><Cell status="on"/></td>
                            <td><Cell status="off"/></td>
                            <td><Cell status="on"/></td>
                            <td><Cell status="off"/></td>
                        </tr>
                        <tr>
                            <td><Cell status="off"/></td>
                            <td><Cell status="off"/></td>
                            <td><Cell status="off"/></td>
                            <td><Cell status="on"/></td>
                            <td><Cell status="off"/></td>
                        </tr>
                        <tr>
                            <td><Cell status="off"/></td>
                            <td><Cell status="on"/></td>
                            <td><Cell status="on"/></td>
                            <td><Cell status="off"/></td>
                            <td><Cell status="off"/></td>
                        </tr>
                        <tr>
                            <td><Cell status="off"/></td>
                            <td><Cell status="off"/></td>
                            <td><Cell status="off"/></td>
                            <td><Cell status="on"/></td>
                            <td><Cell status="off"/></td>
                        </tr>
                        <tr>
                            <td><Cell status="off"/></td>
                            <td><Cell status="on"/></td>
                            <td><Cell status="off"/></td>
                            <td><Cell status="on"/></td>
                            <td><Cell status="off"/></td>
                        </tr>
                    </tbody>
                </table>
                <button className="new-game-button">New Game</button>
            </div>
        );
    }
}

export default Board;