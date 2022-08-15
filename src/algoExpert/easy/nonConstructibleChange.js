function nonConstructibleChange(coins) {
  // Write your code here.
  coins.sort((a, b) => a - b);

  let change = 0;

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > change + 1) {
      return change + 1;
    } else {
    }
    change += coins[i];
  }

  return change + 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
console.log(nonConstructibleChange([1, 1, 1, 1, 1]));
console.log(nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100]));
console.log(
  nonConstructibleChange([109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4])
);
