const depthFirstPrint = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    let current = stack.pop();
    console.log(current);
    for (let neighbour of graph[current]) {
      stack.push(neighbour);
    }
  }
};

const dfsRecursive = (graph, source) => {
  console.log(source);
  for (let neighbour of graph[source]) {
    dfsRecursive(graph, neighbour);
  }
};

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
};

dfsRecursive(graph, 'a');
