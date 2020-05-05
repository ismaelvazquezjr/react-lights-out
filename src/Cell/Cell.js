import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
    render() {
        return (
            <div className={`cell ${this.props.status}`}>

            </div>
        );
    }
}

export default Cell;