function spiralTraverse(input) {
  // Write your code here.
  let startRow = 0;
  let endRow = input.length - 1;
  let startCol = 0;
  let endCol = input[0].length - 1;

  let result = [];
  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      result.push(input[startRow][i]);
    }

    for (let i = startRow + 1; i <= endRow; i++) {
      result.push(input[i][endCol]);
    }

    for (let i = endCol - 1; i >= startCol; i--) {
      if (endRow > startRow) {
        result.push(input[endRow][i]);
      }
    }

    for (let i = endRow - 1; i > startRow; i--) {
      if (endCol > startCol) {
        result.push(input[i][startCol]);
      }
    }

    startRow = startRow + 1;
    startCol = startCol + 1;
    endRow = endRow - 1;
    endCol = endCol - 1;

    // console.log(result);
  }

  return result;
}

function spiralTraverseRecursive(input) {
  // Write your code here.
  let startRow = 0;
  let endRow = input.length - 1;
  let startCol = 0;
  let endCol = input[0].length - 1;

  let result = [];

  spiralTraverseFill(input, startRow, startCol, endRow, endCol, result);

  return result;
}

function spiralTraverseFill(
  input,
  startRow,
  startCol,
  endRow,
  endCol,
  result = []
) {
  if (startRow > endRow || startCol > endCol) return;

  for (let i = startCol; i <= endCol; i++) {
    result.push(input[startRow][i]);
  }

  for (let i = startRow + 1; i <= endRow; i++) {
    result.push(input[i][endCol]);
  }

  for (let i = endCol - 1; i >= startCol; i--) {
    if (endRow > startRow) {
      result.push(input[endRow][i]);
    }
  }

  for (let i = endRow - 1; i > startRow; i--) {
    if (endCol > startCol) {
      result.push(input[i][startCol]);
    }
  }

  spiralTraverseFill(
    input,
    startRow + 1,
    startCol + 1,
    endRow - 1,
    endCol - 1,
    result
  );
}

let test = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

let test2 = [
  [1, 2, 3],
  [12, 13, 4],
  [11, 14, 5],
  [10, 15, 6],
  [9, 8, 7],
];

let test3 = [
  [1, 2, 3, 4],
  [10, 11, 12, 5],
  [9, 8, 7, 6],
];

// console.log(spiralTraverse(test));
// console.log(spiralTraverse(test2));
// console.log(spiralTraverse(test3));

console.log(spiralTraverseRecursive(test));
console.log(spiralTraverseRecursive(test2));
console.log(spiralTraverseRecursive(test3));
