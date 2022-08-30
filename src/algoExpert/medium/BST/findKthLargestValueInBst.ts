// This is an input class. Do not edit.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class TreeInfo {
  constructor(public visited: number, public lastVisited: number) {}
}

export function findKthLargestValueInBst(tree: BST | null, k: number) {
  let treeInfo: TreeInfo = new TreeInfo(0, -1);
  visit(tree, k, treeInfo);
  return treeInfo.lastVisited;
}

export function visit(tree: BST | null, k: number, treeInfo: TreeInfo) {
  // Write your code here.
  if (tree === null) return;

  if (treeInfo.visited >= k) {
    return;
  }

  visit(tree.right, k, treeInfo);

  // console.log(tree.value);
  if (treeInfo.visited < k) {
    treeInfo.lastVisited = tree.value;
    treeInfo.visited = treeInfo.visited + 1;
    visit(tree.left, k, treeInfo);
  }
}

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.right = new BST(22);

console.log(findKthLargestValueInBst(root, 3));
