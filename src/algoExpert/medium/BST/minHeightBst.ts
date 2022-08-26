// // First way
// // time - O(nlog(n)) space O(n);
// export function minHeightBst(array: number[]): BST | undefined {
//   return calculateMinHeightBst(array, null, 0, array.length - 1);
// }

// export function calculateMinHeightBst(
//   array: number[],
//   bst: BST | null,
//   startIdx: number,
//   lastIdx: number
// ): BST | undefined {
//   // Write your code here.

//   if (lastIdx < startIdx) return;

//   const midIdx = Math.floor((startIdx + lastIdx) / 2);

//   const valueToAdd = array[midIdx];

//   if (bst === null) {
//     bst = new BST(valueToAdd);
//   } else {
//     bst.insert(valueToAdd);
//   }

//   calculateMinHeightBst(array, bst, startIdx, midIdx - 1);
//   calculateMinHeightBst(array, bst, midIdx + 1, lastIdx);

//   return bst;
// }

//  // 2nd way using time O(n)
// //  time - O(n) space O(n);
// export function minHeightBst(array: number[]): BST | undefined {
//   return calculateMinHeightBst(array, null, 0, array.length - 1);
// }

// export function calculateMinHeightBst(
//   array: number[],
//   bst: BST | null,
//   startIdx: number,
//   lastIdx: number
// ): BST | undefined {
//   // Write your code here.

//   if (lastIdx < startIdx) return;

//   const midIdx = Math.floor((startIdx + lastIdx) / 2);

//   const bstNode = new BST(array[midIdx]);
//   if (bst === null) {
//     bst = bstNode;
//   } else {
//     if (array[midIdx] < bst.value) {
//       bst.left = bstNode;
//       bst = bst.left;
//     } else {
//       bst.right = bstNode;
//       bst = bst.right;
//     }
//   }

//   calculateMinHeightBst(array, bst, startIdx, midIdx - 1);
//   calculateMinHeightBst(array, bst, midIdx + 1, lastIdx);

//   return bst;
// }

// Third way cleaner code.
export function minHeightBst(array: number[]): BST | null {
  return calculateMinHeightBst(array, 0, array.length - 1);
}

export function calculateMinHeightBst(
  array: number[],
  startIdx: number,
  lastIdx: number
): BST | null {
  // Write your code here.

  if (lastIdx < startIdx) return null;

  const midIdx = Math.floor((startIdx + lastIdx) / 2);

  const bst = new BST(array[midIdx]);

  bst.left = calculateMinHeightBst(array, startIdx, midIdx - 1);
  bst.right = calculateMinHeightBst(array, midIdx + 1, lastIdx);

  return bst;
}

export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

console.log(JSON.stringify(minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22])));
