const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

// Island count is 3

const isIslandCount = (grid) => {
  // todo
  let count = 0;
  const visited = new Set();
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (explore(grid, r, c, visited) === true) {
        count = count + 1;
      }
    }
  }
  console.log(`Total count ${count}`);
  return count;
};

const explore = (grid, row, col, visited) => {
  const rowInbound = 0 <= row && row < grid.length;
  const colInbound = 0 <= col && col < grid[0].length;

  if (!rowInbound || !colInbound) return false;

  if (grid[row][col] === "W") return false;

  const pos = `${row},${col}`;
  if (visited.has(pos)) return false;

  visited.add(pos);

  explore(grid, row - 1, col, visited);
  explore(grid, row + 1, col, visited);
  explore(grid, row, col - 1, visited);
  explore(grid, row, col + 1, visited);

  return true;
};

isIslandCount(grid);
