import React from "react";
import { SKY_GROUND_WIDTH } from "../utils/constants";

const Sky = () => {
    const style = {
        fill: '#30abef'
    };
    const height = 1200;

    return (
        <rect
            style={style}
            x={SKY_GROUND_WIDTH/-2}
            y={100 - height}
            width={SKY_GROUND_WIDTH}
            height={height}
        />
    )
};

export default Sky;