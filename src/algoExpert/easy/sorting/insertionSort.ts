export function insertionSort(array: number[]) {
  // Write your code here.
  for (let i = 1; i < array.length; i++) {
    sort(array, i);
  }
  return array;
}

function sort(array: number[], lastIndex: number) {
  while (lastIndex > 0 && array[lastIndex] < array[lastIndex - 1]) {
    let temp = array[lastIndex];
    array[lastIndex] = array[lastIndex - 1];
    array[lastIndex - 1] = temp;
    lastIndex--;
  }
}

console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]));
console.log(insertionSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(
  insertionSort([
    -4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8
  ])
);

console.log(
  insertionSort([
    427, 787, 222, 996, -359, -614, 246, 230, 107, -706, 568, 9, -246, 12, -764,
    -212, -484, 603, 934, -848, -646, -991, 661, -32, -348, -474, -439, -56,
    507, 736, 635, -171, -215, 564, -710, 710, 565, 892, 970, -755, 55, 821, -3,
    -153, 240, -160, -610, -583, -27, 131
  ])
);
