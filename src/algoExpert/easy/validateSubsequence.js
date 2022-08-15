function isValidSubsequence(array, sequence) {
  // Write your code here.
  let i = 0;
  j = 0;
  while (i < array.length && j < sequence.length) {
    if (array[i] === sequence[j]) {
      i++;
      j++;
    } else {
      i++;
    }
    if (j === sequence.length) return true;
  }
  return false;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
console.log(
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10])
);
console.log(
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 6, -1, 8, 10])
);
