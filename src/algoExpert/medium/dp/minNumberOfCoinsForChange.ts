// Time O(nd) Space - O(n) - n is currency, d is number of denominations
export function minNumberOfCoinsForChange(n: number, denoms: number[]) {
  // Write your code here.
  let nums = new Array(n + 1).fill(Infinity);

  nums[0] = 0;

  for (let i = 0; i < denoms.length; i++) {
    let currentDenom = denoms[i];
    for (let j = 1; j < nums.length; j++) {
      if (currentDenom <= j) {
        nums[j] = Math.min(1 + nums[j - currentDenom], nums[j]);
      }
    }
  }
  console.log(`nums ${JSON.stringify(nums)}`);
  return nums[n] !== Infinity ? nums[n] : -1;
}

console.log(minNumberOfCoinsForChange(7, [1, 5, 10]));

console.log(minNumberOfCoinsForChange(7, [2, 4]));
