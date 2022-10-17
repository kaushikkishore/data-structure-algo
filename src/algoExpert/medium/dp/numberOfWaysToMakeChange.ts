// Time O(nd) Space - O(n) - n is currency, d is number of denominations
export function numberOfWaysToMakeChange(n: number, denoms: number[]) {
  // Write your code here.
  let ways = new Array(n + 1).fill(0);

  ways[0] = 1;

  for (let i = 0; i < denoms.length; i++) {
    let currentDenom = denoms[i];
    for (let j = 1; j < ways.length; j++) {
      if (currentDenom <= j) {
        ways[j] += ways[j - currentDenom];
      }
    }
  }
  console.log(`Ways ${JSON.stringify(ways)}`);
  return ways[ways.length - 1];
}

console.log(numberOfWaysToMakeChange(10, [1, 5, 10, 25]));
