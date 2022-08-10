const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "x"],
];

const shortestPath = (edges, nodeA, nodeB) => {
  const adjancyList = buildGraph(edges);

  const visited = new Set([nodeA]);

  const queue = [[nodeA, 0]];

  while (queue.length > 0) {
    const [node, distance] = queue.shift();

    if (node === nodeB) {
      return distance;
    }

    for (let neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push([neighbour, distance + 1]);
      }
    }
  }

  return -1;
};

const buildGraph = (edges) => {
  const graph = {};

  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = b;
    if (!(b in graph)) graph[b] = a;

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};
