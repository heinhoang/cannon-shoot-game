import React, { Component } from "react";
import PropTypes from 'prop-types';

import Canvas from "../components/Canvas";

const Game = (props) => (
    <Canvas angle={props.angle} />
);

Game.propTypes = {
    angle: PropTypes.number
};

export default Game;