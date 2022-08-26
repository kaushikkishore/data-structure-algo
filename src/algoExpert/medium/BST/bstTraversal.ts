class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// time complexity - O(n) , space O(n) because array is storing.
// If only print then O(d) - d is max depth of the tree so these number will be in number of frames.
export function inOrderTraverse(
  tree: BST | null,
  array: number[]
): number[] | undefined {
  // Write your code here.
  if (tree === null) return;

  inOrderTraverse(tree.left, array);
  array.push(tree.value);
  inOrderTraverse(tree.right, array);
  return array;
}

// time complexity - O(n) , space O(n) because array is storing.
// If only print then O(d) - d is max depth of the tree so these number will be in number of frames.
export function preOrderTraverse(
  tree: BST | null,
  array: number[]
): number[] | undefined {
  // Write your code here.
  if (tree === null) return;
  array.push(tree.value);
  preOrderTraverse(tree.left, array);
  preOrderTraverse(tree.right, array);

  return array;
}

// time complexity - O(n) , space O(n) because array is storing.
// If only print then O(d) - d is max depth of the tree so these number will be in number of frames.
export function postOrderTraverse(
  tree: BST | null,
  array: number[]
): number[] | undefined {
  if (tree === null) return;
  // Write your code here.
  postOrderTraverse(tree.left, array);
  postOrderTraverse(tree.right, array);
  array.push(tree.value);
  return array;
}

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.right = new BST(22);

console.log(JSON.stringify(postOrderTraverse(root, [])));
