function allPathsSourceTarget(graph) {
  return allPaths(graph, 0, graph.length - 1, [[]], [0]);
}

function allPaths(graph, src, des, result, current = []) {
  if (src === des) {
    result.push([...current]);
    return;
  }
  for (let item of graph[src]) {
    current.push(item);
    allPaths(graph, item, des, result, current);
    current.pop();
  }
  return result;
}

function getAdjancyList(graph) {
  let list = {};
  for (let i = 0; i < graph.length; i++) {
    list[i] = graph[i];
  }
  return list;
}

console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]));
