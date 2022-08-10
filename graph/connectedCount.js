// connected component 
const connectedComponentCount = (graph) => {
    const visited = new Set();
    let count = 0;
    for(let node in graph) {
        if(explore(graph, node, visited) === true){
            count= count + 1;
        }
    }

    return count;
}

const explore = (graph, node, visited) => {
    if(visited.has(String(node))) return false;

    visited.add(String(node));

    for (const neighbour of graph[node]) {
        explore(graph, neighbour, visited);
    }

    return true;
}


connectedComponentCount({
    0: [8,1,5],
    1: [0],
    5: [0,8],
    8: [0,5],
    2: [3,4],
    3: [2,4],
    4: [3,2]
}); // -> 2