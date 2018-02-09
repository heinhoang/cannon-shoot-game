export const radiansToDegrees = radians => ((radians * 180) / Math.PI);

/**
 * calculate angle based on mouse position
 * more here: https://math.stackexchange.com/questions/714378/find-the-angle-that-creating-with-y-axis-in-degrees
 * @param {float} x1 
 * @param {float} y1 
 * @param {float} x2 
 * @param {float} y2 
 */
export const calculateAngle = (x1, y1, x2, y2) => {
  if (x2 >= 0 && y2 >= 0) {
    return 90;
  } else if (x2 < 0 && y2 >= 0) {
    return -90;
  }

  const dividend = x2 - x1;
  const divisor = y2 - y1;
  const quotient = dividend / divisor;
  return radiansToDegrees(Math.atan(quotient)) * -1;
};

/**
 * Move cannon based on mouse position
 * @param {object} state
 * @param {object} action 
 */
export function moveObjects(state, action) {
    if (!action.mousePosition) return state;
    const { x, y } = action.mousePosition;
    const angle = calculateAngle(0, 0, x, y);
    return {
        ...state,
        angle,
    };
}