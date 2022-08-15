const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

const largestComponent = (graph) => {
  let longest = 0;
  const visited = new Set();
  for (const node in graph) {
    const size = explore(graph, node);
    longest = Math.max(size, longest, visited);
  }
  return longest;
};

const explore = (graph, node, visited) => {
  if (visited.has(String(node))) return 0;

  let size = 1;
  visited.add(String(node));

  for (const neighbour of graph[node]) {
    size += explore(graph, neighbour, visited);
  }
  return size;
};
