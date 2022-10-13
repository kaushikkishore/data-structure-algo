// Time O(n) space O(1)
export function maxSubsetSumNoAdjacent(array: number[]) {
  // Write your code here.

  if (array.length === 0) {
    return 0;
  }

  if (array.length === 1) {
    return array[0];
  }

  if (array.length === 2) {
    return Math.max(array[0], array[1]);
  }

  // Formula to get the current index
  // array[index] = MAX( array[index-1], (array[index-2] + array[index]) )
  let first = Math.max(array[0], array[1]);
  let second = array[0];
  for (let index = 2; index < array.length; index++) {
    const current = Math.max(first, second + array[index]);
    second = first;
    first = current;
  }

  return first;
}

console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135])); // 330
console.log(maxSubsetSumNoAdjacent([4, 3, 5, 200, 5, 3])); // 207
console.log(maxSubsetSumNoAdjacent([30, 25, 50, 55, 100, 120])); // 205
