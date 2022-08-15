// All node is verticies in graph
// verticies / - all nodes
// edges - connected lines are edges
// Time complexity O(v+e) - vertex + edge
// Space complexity O(v) - vertex
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);

    for (const item of this.children) {
      item.depthFirstSearch(array);
    }
    return array;
  }
}

const graph = new Node("A").addChild("B").addChild("C").addChild("D");
graph.children[0].addChild("E").addChild("F");
graph.children[2].addChild("G").addChild("H");
graph.children[0].children[1].addChild("I").addChild("J");
graph.children[2].children[0].addChild("K");

console.log(graph.depthFirstSearch([]));
