import React from 'react';
import { SKY_GROUND_WIDTH } from '../utils/constants';

const Ground = () => {
    const groundStyle = {
        fill: '#59a941',
    };

    const lineStyle = {
        stroke: '#458232',
        strokeWidth: '3px',
    };

    return (
        <g id="ground">
            <rect id="ground-2"
                style={groundStyle}
                x={SKY_GROUND_WIDTH / -2}
                y={0}
                width={SKY_GROUND_WIDTH}
                height={100}
            />
            <line
                style={lineStyle}
                x1={SKY_GROUND_WIDTH/-2}
                y1={0}
                x2={SKY_GROUND_WIDTH/2}
                y2={0}
            />
        </g>
    );
};

export default Ground;