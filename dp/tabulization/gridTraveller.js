const gridTraveller = (m, n) => {
  const table = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j];
      if (j + 1 <= n) table[i][j + 1] += current;
      if (i + 1 <= m) table[i + 1][j] += current;
      //   console.log(`i=${i},j=${j}`);
    }
  }

  return table;
};

const gridTraveller2 = (m, n) => {
  const table = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;

  for (let i = 1; i <= m; i++) {
    table[i][1] = 1;
  }

  for (let j = 1; j <= n; j++) {
    table[1][j] = 1;
  }

  for (let i = 2; i <= m; i++) {
    for (let j = 2; j <= n; j++) {
      table[i][j] = table[i - 1][j] + table[i][j - 1];
    }
  }

  return table;
};

// console.log(gridTraveller(1, 1)); // 1
// console.log(gridTraveller(2, 3)); // 2
// console.log(gridTraveller(3, 2)); // 3
console.log(gridTraveller2(5, 5)); // 6
console.log(gridTraveller(5, 5)); // 6
// console.log(gridTraveller(18, 18)); // 6
