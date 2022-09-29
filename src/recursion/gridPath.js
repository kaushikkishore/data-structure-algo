function gridPath(n, m) {
  if (n === 1 || m === 1) {
    return 1;
  } else {
    return gridPath(n, m - 1) + gridPath(n - 1, m);
  }
}

console.log(gridPath(5, 4));
