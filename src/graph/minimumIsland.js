const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

const minimuIsland = (graph) => {
  const visited = new Set();
  let isLandCount = Infinity;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const count = countIsland(graph, r, c, visited);
      // console.log(`Count ${count}`);
      if (count > 0 && count < isLandCount) {
        isLandCount = count;
      }
    }
  }

  console.log(`Minimum count: ${isLandCount}`);
};

const countIsland = (graph, r, c, visited) => {
  const rowInbound = 0 <= r && r < graph.length;
  const colInbound = 0 <= c && c < graph[0].length;

  if (!rowInbound || !colInbound) return 0;

  const pos = `${r},${c}`;
  if (visited.has(pos)) return 0;

  if (graph[r][c] === "W") return 0;

  visited.add(pos);

  let total = 1;
  total += countIsland(graph, r - 1, c, visited);
  total += countIsland(graph, r + 1, c, visited);
  total += countIsland(graph, r, c - 1, visited);
  total += countIsland(graph, r, c + 1, visited);

  return total;
};

minimuIsland(grid);
