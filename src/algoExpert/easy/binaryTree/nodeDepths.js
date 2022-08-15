// This is the class of the input tree. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);

const d = new Node(4);
const e = new Node(5);

const f = new Node(6);
const g = new Node(7);

const h = new Node(8);
const i = new Node(9);
const j = new Node(10);

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.left = f;
c.right = g;

d.left = h;
d.right = i;

// e.left = j;

// Time - O(n)
// space = O(h) - h - height of the tree
function nodeDepths(tree) {
  return calculateBranchDepth(tree, 0);
  // return result;
}

function calculateBranchDepth(node, currentDepth) {
  if (node === null) return 0;

  console.log(`Current node value ${node.value} at depth ${currentDepth}`);
  result =
    currentDepth +
    calculateBranchDepth(node.left, currentDepth + 1) +
    calculateBranchDepth(node.right, currentDepth + 1);

  return result;
}

// Iterative approach
function nodeDepthIterative(tree) {
  let stack = [{ node: tree, depth: 0 }];
  let sum = 0;
  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    if (node === null) {
      continue;
    }
    sum += depth;

    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }
  return sum;
}

console.log(nodeDepthIterative(a));
