class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(values: number[], i = 0): BinaryTree {
    if (i >= values.length) return this;
    const queue: BinaryTree[] = [this];
    while (queue.length > 0) {
      let current = queue.shift()!;
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i + 1);
    return this;
  }
  invertedInsert(values: number[], i = 0): BinaryTree {
    if (i >= values.length) return this;
    const queue: BinaryTree[] = [this];
    while (queue.length > 0) {
      let current = queue.shift()!;
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
    }
    this.invertedInsert(values, i + 1);
    return this;
  }
}

// For iterative solition
// Time - O(n)
// space - O(n) - As in the queue there could be n elements for all leaf nodes which will be null values.
// 2^n is leaf node in binary tree.

// For recursive solution
// Time - O(n)
// Space - O(d) - where d is depth of the binary tree.
// In general the d can be representes as O(log n) for the binary tree.

// Iterative solution.
export function invertBinaryTree(tree: BinaryTree | null): BinaryTree | null {
  // Write your code here.
  if (tree === null) return null;
  if (tree.left === null && tree.right === null) return null;
  const queue: Array<BinaryTree | null> = [tree];
  while (queue.length > 0) {
    const currentNode = queue.shift()!;
    if (currentNode === null) continue;
    swapNodes(currentNode);
    queue.push(currentNode?.left);
    queue.push(currentNode?.right);
  }
  return tree;
}

// Recursive solution
// export function invertBinaryTree(tree: BinaryTree | null): BinaryTree | null {
//   // Write your code here.
//   if (tree === null) return null;
//   if (tree.left === null && tree.right === null) return null;
//   swapNodes(tree);
//   invertBinaryTree(tree.left);
//   invertBinaryTree(tree.right);
//   return tree;
// }

export function swapNodes(tree: BinaryTree | null | undefined) {
  if (tree == null) return;
  if (tree.left === null && tree.right === null) return;

  let temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;
}

const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9]);

console.log(invertBinaryTree(tree));
