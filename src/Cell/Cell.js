import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.testHandler = this.testHandler.bind(this);
    }

    testHandler() {
        this.props.test(this.props.id, this.props.isLit);
    }

    render() {
        let isLit = this.props.isLit ? "on" : "off";
        return (
            <div className={`cell ${isLit}`} onClick={this.testHandler}>

            </div>
        );
    }
}

export default Cell;