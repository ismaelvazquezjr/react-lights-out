import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.flipHandler = this.flipHandler.bind(this);
    }

    flipHandler() {
        this.props.flip(this.props.id, this.props.isLit);
    }

    render() {
        let isLit = this.props.isLit ? "on" : "off";
        return (
            <div className={`cell ${isLit}`} onClick={this.flipHandler}>

            </div>
        );
    }
}

export default Cell;