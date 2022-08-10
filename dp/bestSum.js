const bestSum = (targetSum, arr, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortest = null;
  for (const item of arr) {
    const remainder = targetSum - item;
    const result = bestSum(remainder, arr, memo);

    if (result !== null) {
      const combination = [...result, item];
      if (shortest === null || combination.length < shortest.length) {
        shortest = combination;
      }
    }
  }

  memo[targetSum] = shortest;
  return shortest;
};

console.log(bestSum(7, [2, 3]));
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(300, [1, 2, 5, 25]));
