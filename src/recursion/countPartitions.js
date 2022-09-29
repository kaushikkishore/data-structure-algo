function countPartitions(n, m) {
  if (n === 0) {
    return 1;
  } else if (m === 0 || n < 0) {
    return 0;
  }
  return countPartitions(n - m, m) + countPartitions(n, m - 1);
}

console.log(countPartitions(15, 3));
