import React, { Component } from "react";
import PropTypes from 'prop-types';

import Canvas from "../components/Canvas";
import { getCanvasPosition } from '../utils/fomulas';

class Game extends Component {
    constructor(props) {
        super(props);
        this.trackMouse = this.trackMouse.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        const self = this;
        setInterval(() => {
            self.props.moveObjects(self.canvasMousePosition); //console.log(self.canvasMousePosition);
        }, 10);
    }

    trackMouse(event) {
        this.canvasMousePosition = getCanvasPosition(event);
    }

    render() {
        return (<Canvas
            angle={this.props.angle}
            trackMouse={event => (this.trackMouse(event))}
        />);
    }
}

Game.propTypes = {
    angle: PropTypes.number,
    moveObjects: PropTypes.func.isRequired
};

export default Game;