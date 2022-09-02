export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  parent: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

// time - O(n) | space - O(n) | Where n is number of nodes in the binary tree.
// export function findSuccessor(tree: BinaryTree | null, node: BinaryTree) {
//   // Write your code here.
//   if (tree === null) return;

//   const inOrderNodes = findNode(tree, node);

//   for (let index = 0; index < inOrderNodes.length; index++) {
//     const currentNode = inOrderNodes[index];
//     if (currentNode !== node) continue;
//     if (index === inOrderNodes.length - 1) return null;
//     return inOrderNodes[index + 1];
//   }

//   return node;
// }

// export function findNode(
//   tree: BinaryTree | null,
//   node: BinaryTree,
//   order: BinaryTree[] = []
// ) {
//   if (tree === null) return [];
//   findNode(tree.left, node, order);
//   order.push(tree);
//   findNode(tree.right, node, order);
//   return order;
// }

// Time - O(h) | space O(1) where h is height of the tree.
export function findSuccessor(node: BinaryTree) {
  // Write your code here.
  if (node.right !== null) return getLeftMostChild(node.right);
  return getRightMostParent(node);
}

function getLeftMostChild(node: BinaryTree) {
  let currentNode = node;
  while (currentNode.left !== null) {
    currentNode = currentNode.left;
  }
  return currentNode;
}

function getRightMostParent(node: BinaryTree) {
  let currentNode = node;
  while (
    currentNode.parent !== null &&
    currentNode.parent.right === currentNode
  ) {
    currentNode = currentNode.parent;
  }
  return currentNode.parent;
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.parent = root;
root.right = new BinaryTree(3);
root.right.parent = root;
root.left.left = new BinaryTree(4);
root.left.left.parent = root.left;
root.left.right = new BinaryTree(5);
root.left.right.parent = root.left;
root.left.left.left = new BinaryTree(6);
root.left.left.left.parent = root.left.left;

const node = root.left.right;

const succesor = findSuccessor(node);

console.log(succesor === root);
