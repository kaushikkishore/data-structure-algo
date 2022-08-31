// This is an input class. Do not edit.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(
    value: number,
    left: BST | null = null,
    right: BST | null = null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// // Time - O(n^2) | Space O(h) | actual space will be O(n) as tree will take that space.
// export function reconstructBst(preOrderTraversalValues: number[]): BST | null {
//   // Write your code here.
//   if (preOrderTraversalValues.length === 0) return null;

//   let currentValue = preOrderTraversalValues[0];
//   let rightSubtreeIdx = preOrderTraversalValues.length;

//   for (let i = 1; i < preOrderTraversalValues.length; i++) {
//     if (preOrderTraversalValues[i] >= currentValue) {
//       rightSubtreeIdx = i;
//       break;
//     }
//   }

//   const leftSubtree = reconstructBst(
//     preOrderTraversalValues.slice(1, rightSubtreeIdx)
//   );
//   const rightSubtree = reconstructBst(
//     preOrderTraversalValues.slice(rightSubtreeIdx)
//   );

//   return new BST(currentValue, leftSubtree, rightSubtree);
// }

export class TreeInfo {
  constructor(public rootIdx: number) {}
}

// Time - O(n) | Space O(h) | actual space will be O(n) as tree will take that space.
export function reconstructBst(preOrderTraversalValues: number[]): BST | null {
  // Write your code here.
  const treeInfo = new TreeInfo(0);
  return reconstruct(-Infinity, Infinity, preOrderTraversalValues, treeInfo);
}

function reconstruct(
  lowerBound: number,
  upperBound: number,
  preOrderTraversalValues: number[],
  currentSubtreeInfo: TreeInfo
): BST | null {
  if (currentSubtreeInfo.rootIdx === preOrderTraversalValues.length)
    return null;

  let rootValue = preOrderTraversalValues[currentSubtreeInfo.rootIdx];

  if (rootValue < lowerBound || rootValue >= upperBound) return null;

  currentSubtreeInfo.rootIdx++;

  const leftSubtree = reconstruct(
    lowerBound,
    rootValue,
    preOrderTraversalValues,
    currentSubtreeInfo
  );
  const rightSubtree = reconstruct(
    rootValue,
    upperBound,
    preOrderTraversalValues,
    currentSubtreeInfo
  );

  return new BST(rootValue, leftSubtree, rightSubtree);
}

export function inOrderTraversal(tree: BST | null) {
  if (tree === null) return;

  inOrderTraversal(tree.left);
  console.log(tree.value);
  inOrderTraversal(tree.right);
}

inOrderTraversal(reconstructBst([10, 4, 2, 1, 5, 17, 19, 18]));
