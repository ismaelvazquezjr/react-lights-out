import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.flipHandler = this.flipHandler.bind(this);
    }

    flipHandler() {
        if (!this.props.disabled) this.props.flip(this.props.id);
    }

    render() {
        let isLit = this.props.isLit ? "on" : "off";
        return (
            <div className={`cell ${isLit}  ${this.props.disabled && 'is-winner'}`} onClick={this.flipHandler} disabled={this.props.disabled}>

            </div>
        );
    }
}

export default Cell;