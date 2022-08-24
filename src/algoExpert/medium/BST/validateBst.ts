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

export function validateBst(tree: BST) {
  // Write your code here.

  return validateBSTHelper(tree, -Infinity, Infinity);
}

function validateBSTHelper(
  tree: BST | null,
  minValue: number,
  maxValue: number
): boolean {
  if (tree === null) return true;

  if (tree.value < minValue || tree.value >= maxValue) {
    return false;
  }
  return (
    validateBSTHelper(tree.left, minValue, tree.value) &&
    validateBSTHelper(tree.right, tree.value, maxValue)
  );
}
