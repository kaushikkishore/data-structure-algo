/**
 *                  a
 *              b       c
 *            d   e   f    g
 */
const { isIslandCount } = require("./islandCount");
const nodeMapping = {
  a: ["b", "c"],
  b: ["d", "e"],
  c: ["f", "g"],
  d: [],
  e: [],
  f: [],
  g: [],
};

const breadthFirst = (graph, startingNode) => {
  console.log(startingNode);
  const queue = [startingNode];

  while (queue.length > 0) {}
};
const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

isIslandCount(grid);
