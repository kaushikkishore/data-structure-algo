// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // Average O(log(n)) time | O(1) - space in iterative method | O(n) - recursive way
  // Worst O(n) time | O(1) - space in iterative method | O(n) - recursive way
  insert(value: number): BST {
    // Write your code here.
    // Do not edit the return statement of this method.
    let currentNode: BST = this;

    while (true) {
      if (value < currentNode!.value) {
        // Explore the left node
        if (currentNode!.left === null) {
          currentNode!.left = new BST(value);
          break;
        } else {
          currentNode = currentNode!.left;
        }
      } else {
        if (currentNode!.right === null) {
          currentNode!.right = new BST(value);
          break;
        } else {
          currentNode = currentNode!.right;
        }
      }
    }
    return this;
  }

  // Average O(log(n)) time | O(1) - space in iterative method | O(n) - recursive way
  // Worst O(n) time | O(1) - space in iterative method | O(n) - recursive way
  contains(value: number) {
    // Write your code here.

    let currentNode: BST | null = this;

    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }

    return false;
  }

  // Average O(log(n)) time | O(1) - space in iterative method | O(n) - recursive way
  // Worst O(n) time | O(1) - space in iterative method | O(n) - recursive way
  remove(value: number, parentNode: BST | null = null): BST {
    // Write your code here.
    // Do not edit the return statement of this method.

    let currentNode: BST | null = this;
    while (currentNode != null) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        if (currentNode.left != null && currentNode.right !== null) {
          currentNode.value = currentNode.right.getMinValue();
          currentNode.right.remove(currentNode.value, currentNode);
        } else if (parentNode === null) {
          if (currentNode.left !== null) {
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.right !== null) {
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else {
            // case for single node tree
          }
        } else if (parentNode.left === currentNode) {
          parentNode.left =
            currentNode.left !== null ? currentNode.left : currentNode.right;
        } else if (parentNode.right === currentNode) {
          parentNode.right =
            currentNode.left !== null ? currentNode.left : currentNode.right;
        }
        break;
      }
    }

    return this;
  }

  getMinValue(): number {
    let currentNode: BST = this;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}
