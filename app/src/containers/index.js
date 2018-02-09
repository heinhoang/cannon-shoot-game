import { connect } from "react-redux";

import { moveObjects } from "../actions";
import Game from "./Game";

const mapStateToProp = (state) => ({
    angle: state.angle
});

const mapDispatchToProp = (dispatch) => ({
    moveObjects: (mousePosition) => dispatch(moveObjects(mousePosition))
});

const Container = connect(mapStateToProp, mapDispatchToProp)(Game);

export default Container;