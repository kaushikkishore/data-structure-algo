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

// Time - O(n)
// space - O(d) - d is depth of the binary tree
// worst case O(n) - only one line

export class TreeInfo {
  constructor(public diameter: number, public height: number) {}
}

export function binaryTreeDiameter(tree: BinaryTree) {
  // Write your code here.
  return getTreeInfo(tree).diameter;
}

export function getTreeInfo(tree: BinaryTree | null): TreeInfo {
  if (tree === null) return new TreeInfo(0, 0);

  const leftTreeInfo = getTreeInfo(tree.left);
  const rightTreeInfo = getTreeInfo(tree.right);

  const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
  const maxDiameterSoFar = Math.max(
    leftTreeInfo.diameter,
    rightTreeInfo.diameter
  );

  const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
  const currentHeight = Math.max(leftTreeInfo.height, rightTreeInfo.height) + 1;

  return new TreeInfo(currentDiameter, currentHeight);
}

const root = new BinaryTree(1);
root.left = new BinaryTree(3);
root.left.left = new BinaryTree(7);
root.left.left.left = new BinaryTree(8);
root.left.left.left.left = new BinaryTree(9);
root.left.right = new BinaryTree(4);
root.left.right.right = new BinaryTree(5);
root.left.right.right.right = new BinaryTree(6);
root.right = new BinaryTree(2);

// Result is 6 . Try drawing the binary tree.
console.log(binaryTreeDiameter(root));
