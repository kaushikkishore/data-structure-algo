const undirectedGraph = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    return hashPath(graph, nodeA, nodeB, new Set());
}

const hashPath = (graph, src, dest, visited) => {
    if(src === dest) return true;

    if(visited.has(src)) return false;

    visited.add(src);

    for (let neighbour of graph[src]) {
        if(hashPath(graph, neighbour, dest, visited) === true){
            return true;
        }
    }
    return false;
}

const buildGraph = (edges) => {
    const graph = {};

    for (let edge of edges) {
        const [a,b] = edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;

}