export function selectionSort(array: number[]) {
  // Write your code here.
  let start = 0;
  let end = array.length;

  while (end > start) {
    const index = getSmallestNumberIndex(array, start, end);
    let temp = array[index];
    array[index] = array[start];
    array[start] = temp;
    start++;
  }

  return array;
}

function getSmallestNumberIndex(
  array: number[],
  start: number,
  end: number
): number {
  let smallestIndex = start;
  let smallestNumber = array[start];
  while (end > start) {
    if (smallestNumber > array[start]) {
      smallestIndex = start;
      smallestNumber = array[start];
    }
    start++;
  }
  console.log(`Smallest index ${smallestIndex} number ${array[smallestIndex]}`);
  return smallestIndex;
}

console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]));
