function longestPeak(array) {
  // Write your code here.
  let maxPeak = 0;
  for (let i = 1; i < array.length - 1; i++) {
    let isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
    if (isPeak) {
      console.log(`Peak is ${array[i]}`);
      let left = i - 1;
      let right = i + 1;
      let max = 3;
      let leftMatch = true;
      let rightMatch = true;
      while (left >= 0 || right <= array.length - 1) {
        if (leftMatch === true && array[left - 1] < array[left]) {
          max = max + 1;
        } else {
          leftMatch = false;
        }
        if (rightMatch === true && array[right + 1] < array[right]) {
          max = max + 1;
        } else {
          rightMatch = false;
        }

        if (leftMatch === false && rightMatch === false) {
          break;
        }

        left = left - 1;
        right = right + 1;
      }
      maxPeak = Math.max(maxPeak, max);
    }
  }
  return maxPeak;
}

console.log(longestPeak([1, 2, 3, 4, 5, 1]));
console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));
