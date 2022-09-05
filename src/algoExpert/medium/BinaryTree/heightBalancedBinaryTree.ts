// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class TreeInfo {
  constructor(public height: number, public isBalanced: boolean) {}
}

// Time - O(n) | space - O(h) - height - in stack space.
export function heightBalancedBinaryTree(tree: BinaryTree) {
  const result = getTreeInfo(tree);
  return result.isBalanced;
}

export function getTreeInfo(node: BinaryTree | null): TreeInfo {
  if (node === null) {
    return new TreeInfo(-1, true);
  }

  const leftTreeInfo = getTreeInfo(node.left);
  const rightTreeInfo = getTreeInfo(node.right);

  const isBalanced =
    leftTreeInfo.isBalanced &&
    rightTreeInfo.isBalanced &&
    Math.abs(leftTreeInfo.height - rightTreeInfo.height) <= 1;
  const height = Math.max(leftTreeInfo.height, rightTreeInfo.height) + 1;

  return new TreeInfo(height, isBalanced);
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.right.right = new BinaryTree(6);
root.left.right.left = new BinaryTree(7);
root.left.right.right = new BinaryTree(8);

console.log(heightBalancedBinaryTree(root)); // true
