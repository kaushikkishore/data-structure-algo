// Minimum amount to run all the queries.
function minimumWaitingTime(queries) {
  if (queries.length === 1) return 0;
  queries.sort((a, b) => a - b);
  //   console.log(queries);
  let total = 0;
  for (let i = 1; i < queries.length; i++) {
    total += queries[i - 1] * (queries.length - i);
  }
  return total;
}

console.log(minimumWaitingTime([3, 2, 1, 2, 6]));
console.log(minimumWaitingTime([2, 1, 1, 1]));

console.log(minimumWaitingTime([1, 2, 4, 5, 2, 1]));
console.log(minimumWaitingTime([25, 30, 2, 1]));
console.log(minimumWaitingTime([1, 1, 1, 1, 1]));
console.log(minimumWaitingTime([7, 9, 2, 3]));
console.log(minimumWaitingTime([4, 3, 1, 1, 3, 2, 1, 8]));
console.log(minimumWaitingTime([7]));
