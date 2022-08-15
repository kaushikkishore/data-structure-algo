function sortedSquaredArray(array) {
  // Write your code here.
  const result = Array(array.length).fill(0);

  let left = 0,
    right = array.length - 1,
    index = result.length - 1;

  while (right >= left) {
    if (Math.abs(array[left]) > Math.abs(array[right])) {
      result[index] = array[left] * array[left];
      index--;
      left++;
    } else {
      result[index] = array[right] * array[right];
      right--;
      index--;
    }
  }

  return result;
}

console.log(sortedSquaredArray([-7, -5, -4, 3, 6, 8, 9]));
console.log(sortedSquaredArray([-2, -1]));
console.log(sortedSquaredArray([-5, -4, -3, -2, -1]));
console.log(sortedSquaredArray([-10, -5, 0, 5, 10]));
