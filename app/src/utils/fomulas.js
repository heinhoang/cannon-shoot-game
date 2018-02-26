/**
 * Change object to cubic Bezier Curve for SVG
 * * SVG command examples:
 *  - d="M 20 20 V 80 H 50"
 *      M 20 20: move (20, 20)
 *      V 80: draw a vertical line from the previous point to the position 80 in the Y-axis
 *      H 50: draw a horizontal line from the previous point to the position 50 in the X-axis
 *  - d="M 20 20 C 20 110, 110 110, 110 20"
 *      start drawing on the point 20, 20;
 *      that the first control point lies on the point 20, 110;
 *      that the second control point lies on the point 110, 110;
 *      to finish the curve on the point 110 20;
 * @param {object} cubicBezierCurve 
 */
export const pathFromBezierCurve = (cubicBezierCurve) => {
  const {
    initialAxis, initialControlPoint, endingControlPoint, endingAxis,
  } = cubicBezierCurve;
  return `
    M${initialAxis.x} ${initialAxis.y}
    c ${initialControlPoint.x} ${initialControlPoint.y}
    ${endingControlPoint.x} ${endingControlPoint.y}
    ${endingAxis.x} ${endingAxis.y}
  `;
};

export const getCanvasPosition = (event) => {
  // mouse position on auto-scaling canvas
  // https://stackoverflow.com/a/10298843/1232793

  const svg = document.getElementById('game-canvas');
  const point = svg.createSVGPoint();

  point.x = event.clientX;
  point.y = event.clientY;
  const { x, y } = point.matrixTransform(svg.getScreenCTM().inverse());
  return { x, y };
};