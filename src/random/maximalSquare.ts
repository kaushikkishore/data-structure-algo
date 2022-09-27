export function maximalSquare(matrix: string[][]): number {
  const newArray: number[][] = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(0));

  for (let i = 0; i < matrix[0].length; i++) {
    newArray[0][i] = +matrix[0][i];
  }

  for (let i = 0; i < matrix.length; i++) {
    newArray[i][0] = +matrix[i][0];
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] === '1') {
        newArray[i][j] =
          Math.min(
            newArray[i - 1][j],
            newArray[i][j - 1],
            newArray[i - 1][j - 1]
          ) + 1;
      }
    }
  }

  let max = 0;
  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray[i].length; j++) {
      max = Math.max(max, newArray[i][j]);
    }
  }
  console.log(`New Array ${JSON.stringify(newArray)}`);
  return max * max;
}

console.log(
  maximalSquare([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0']
  ])
);

console.log(
  maximalSquare([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '1', '1', '0'],
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['0', '0', '1', '1', '1']
  ])
);

console.log(maximalSquare([['1']]));
