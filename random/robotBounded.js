// https://leetcode.com/problems/robot-bounded-in-circle/submissions/

/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  let dirX = 0;
  let dirY = 1;

  let x = 0;
  y = 0;

  if (!instructions || instructions.trim() === "") return false;

  for (let i = 0; i < instructions.length; i++) {
    let move = instructions[i];

    if (move === "G") {
      // Increment the x and y coordinates
      x += dirX;
      y += dirY;
    } else if (move === "L") {
      // Change the dirX and dirY
      let temp = dirX;
      dirX = dirY === 0 ? 0 : -1 * dirY;
      dirY = temp;
    } else if (move === "R") {
      // Change the dirX and dirY
      let temp = dirX;
      dirX = dirY;
      dirY = temp === 0 ? 0 : -1 * temp;
    }
  }

  return (x === 0 && y === 0) || dirX !== 0 || dirY !== 1;
};
isRobotBounded("LLGRL");
