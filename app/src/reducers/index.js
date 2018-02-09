import { MOVE_OBJECTS } from "../actions";
import { moveObjects } from "../utils";

const initialState = {
    angle: 45, // cannon is 45' by default
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case MOVE_OBJECTS:
            return moveObjects(state, action);
        default:
            return state;
    }
};

export default reducer;