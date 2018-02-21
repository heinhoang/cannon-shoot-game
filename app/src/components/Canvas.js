import React from 'react';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';

const Canvas = (props) => {
    // Using viewBox to move coordinates from (0, 0) to (window.innerWidth/2, window.innerHeight - 100)
    // as viewPort is relative to viewBox
    const viewBox = [window.innerWidth/-2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];

    return (<svg
        id="game-canvas"
        preserveAspectRatio="xMaxYMax none"
        viewBox={viewBox}
    >
        <Sky />
        <Ground />
        <CannonBase />
        <CannonPipe rotation='45deg' />
    </svg>);
};

export default Canvas;